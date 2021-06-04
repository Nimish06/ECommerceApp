import React from 'react';
import {View} from 'react-native';
import {useCartContext} from '../utilities/CartContext';

import Fontisto from 'react-native-vector-icons/Fontisto';
const AddToCartButton = ({navigation, ...props}: any) => {
  const {addItemToCart} = useCartContext();

  return (
    <View>
      <Fontisto.Button
        name="shopping-basket-add"
        size={20}
        backgroundColor="grey"
        color="white"
        style={{marginLeft: 10}}
        onPress={() => {
          addItemToCart(
            props.id,
            props.description,
            props.title,
            props.price,
            props.photo,
          );
        }}
      />
    </View>
  );
};
export default AddToCartButton;
