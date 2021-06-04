import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {windowWidth} from '../utilities/Dimensions';
const EmptyPage = (props: any) => {
  const onHomeScreen = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>No items here :(</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Add Items" onPress={onHomeScreen} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignSelf: 'center',

    padding: 15,

    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  textContainer: {
    width: windowWidth / 1.2,
    borderColor: 'black',
    backgroundColor: '#b3b3b3',
    borderRadius: 10,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
export default EmptyPage;
