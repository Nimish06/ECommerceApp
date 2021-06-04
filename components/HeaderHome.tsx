import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useCartContext} from '../utilities/CartContext';
const HeaderHome = (props: any) => {
  const {itemList, totalItems} = useCartContext();

  return (
    <View style={{marginRight: 5}}>
      <View
        style={{
          backgroundColor: 'grey',
          width: 20,
          height: 20,
          borderRadius: 100,
          marginLeft: 0,
          position: 'absolute',
          right: 8,
          top: 0,
          zIndex: 999,
        }}>
        <Text
          style={{
            fontSize: 13,
            marginLeft: 7,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 0,
          }}>
          {totalItems}
        </Text>
      </View>
      <FontAwesome.Button
        name="shopping-cart"
        size={22}
        backgroundColor="#f9fafd"
        color="#333"
        onPress={() => props.navigation.navigate('CheckOut')}
      />
    </View>
  );
};

export default HeaderHome;
