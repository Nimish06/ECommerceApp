import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {windowWidth} from '../utilities/Dimensions';
import Card from './Card';

import AddToCartButton from './AddToCartButton';
interface AppData {
  id: any;

  description: any;
  title: any;
}

const Items = ({navigation, ...props}: any) => {
  const [totalItems, setTotalItems] = useState(0);
  const [data, setData] = useState<AppData>({} as any);

  const addToCart = (id: any, price: any, description: any, title: any) => {
    const data = {id: id, description: description, title: title};
    setData(data);

    setTotalItems(totalItems + 1);
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
              <AddToCartButton
                navigation={props.navigation}
                id={props.id}
                description={props.description}
                title={props.title}
                price={props.price}
                photo={props.photo}
              />
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
    flexDirection: 'row',
    flex: 1,
  },
  buttonPrice: {
    flex: 1,
    flexDirection: 'row-reverse',
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default Items;
// export {Data};
