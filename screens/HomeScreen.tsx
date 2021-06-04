import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import Items from '../components/Items';

const HomeScreen = ({route, navigation}: any) => {
  const [apiResponse, setApiResponse] = useState();
  // const [searchText, setSearchText] = useState('');
  const name = route.params.name;
  const searchItem = (text: any, searchArr: any) => {
    // console.log('SText', searchText);
    // console.log('Arr', searchArr);
    let newArr = searchArr.filter((res: any) => {
      // console.log('E111', res.id);
      if (res.title.includes(text)) {
        return res;
      }

      // return res.title == text;
    });

    // console.log('NEWWWW', newArr);
    setApiResponse(newArr);
  };
  useEffect(() => {
    navigation.setOptions({title: name});
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => {
        const apiArr = res.map((item: any) => {
          {
            return {
              id: item.id,
              description: item.description,
              photo: item.image,
              price: item.price,
              title: item.title,
            };
          }
        });
        // console.log('Apiarr', apiArr);
        setApiResponse(apiArr);
      });
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        style={styles.searchBox}
        // value={searchText}
        onChangeText={e => searchItem(e, apiResponse)}
      />

      {/* <ActivityIndicator size="large" color="grey" visible={loading} /> */}
      {/* <ActivityIndicator size="large" color="grey"  /> */}
      <FlatList
        data={apiResponse}
        keyExtractor={(item: {id: any}) => item.id}
        renderItem={({item}: any) => {
          return (
            <Items
              navigation={navigation}
              id={item.id}
              description={item.description}
              photo={item.photo}
              price={item.price}
              title={item.title}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: 'grey',
    marginHorizontal: 8,
    backgroundColor: '#e8e8e8',
  },
});

export default HomeScreen;
