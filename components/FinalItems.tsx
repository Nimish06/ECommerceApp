import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import {Data} from '../components/Items';
import Card from '../components/Card';
import {windowWidth} from '../utilities/Dimensions';
import {useCartContext} from '../utilities/CartContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const FinalItems = (props: any) => {
  const {finalAmount, deleteOneItem, totalItems} = useCartContext();
  const [counter, setCounter] = useState(1);

  let totalPrice = 0;
  const addMore = (newPrice: any, newID: any) => {
    totalPrice += newPrice;
    setCounter(counter + 1);
    console.log('Totlakldk', counter);
    finalAmount(totalPrice, totalItems);
  };
  const deleteOne = (deleteID: any, deletePrice: any) => {
    setCounter(counter - 1);
    // console.log('TOIILJXIJ');
    deleteOneItem(deleteID, deletePrice, totalItems - counter);
  };
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.photo}} style={styles.image} />

        <View style={styles.screen}>
          <Text style={styles.title}>{props.title}</Text>

          <Text style={styles.description}>{props.description}</Text>
          <View>
            <Text style={styles.price}>$ {props.price}</Text>
            <View style={styles.buttonPrice}>
              <View style={{marginLeft: 10}}>
                <MaterialIcons.Button
                  name="delete"
                  size={20}
                  backgroundColor="black"
                  color="white"
                  style={{marginLeft: 8}}
                  onPress={() => {
                    deleteOne(props.id, props.price);
                  }}
                />
              </View>
              <View>
                <FontAwesome.Button
                  name="cart-plus"
                  size={20}
                  backgroundColor="grey"
                  color="white"
                  style={{marginLeft: 10}}
                  onPress={() => {
                    addMore(props.price, props.id);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
  },

  screen: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row-reverse',
    flex: 1,
    padding: 5,
  },
  buttonPrice: {
    flex: 1,
    flexDirection: 'row-reverse',
    padding: 10,
  },
  image: {
    width: windowWidth / 4,
    height: '100%',
    resizeMode: 'contain',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 8,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default FinalItems;
