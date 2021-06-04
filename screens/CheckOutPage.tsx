import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert, Button} from 'react-native';
import {useCartContext} from '../utilities/CartContext';
import FinalItems from '../components/FinalItems';
import EmptyPage from '../components/EmptyPage';

const CheckOutPage = ({navigation}: any) => {
  const {deleteItems} = useCartContext();
  const {amount} = useCartContext();

  let totalAmount = 0;

  const {itemList} = useCartContext();

  itemList.map(res => {
    totalAmount = totalAmount + res.price;
  });

  const payAlert = () => {
    if (totalAmount != 0 && amount == 0) {
      Alert.alert(
        'Congratulations..!!Purchase Successfull..!! ',
        `Amount paid=$ ${totalAmount}. Your items would be delivered in 2-3 working days.
Press Ok to continue shopping`,

        [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('Home');
              deleteItems();
            },
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    } else {
      Alert.alert(
        'Congratulations..!!Purchase Successfull..!! ',
        `Amount paid=$ ${
          totalAmount + amount
        }. Your items would be delivered in 2-3 working days.
Press Ok to continue shopping`,

        [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('Home');
              deleteItems();
            },
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    }
  };
  return (
    <View style={styles.screen}>
      {itemList[0] ? (
        <View>
          <FlatList
            data={itemList}
            keyExtractor={(item: {id: any}) => item.id}
            renderItem={({item}: any) => {
              return (
                <View>
                  <FinalItems
                    id={item.id}
                    description={item.description}
                    photo={item.photo}
                    price={item.price}
                    title={item.title}
                  />
                </View>
              );
            }}
          />
          {amount == 0 ? (
            <View>
              <View style={styles.totalView}>
                <Text style={styles.totalText}>Amount: $ {totalAmount}</Text>
              </View>
              <View style={styles.btn}>
                <Button title="Pay Now" onPress={payAlert} />
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.totalView}>
                <Text style={styles.totalText}>
                  Amount: $ {totalAmount + amount}
                </Text>
              </View>
              <View style={styles.btn}>
                <Button title="Pay Now" onPress={payAlert} />
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.selectedView}>
          <EmptyPage navigation={navigation} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {},
  selectedText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btn: {
    alignSelf: 'center',
    borderRadius: 4,
    padding: 10,

    width: '80%',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  selectedView: {
    marginVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0e002',
    marginVertical: '10%',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 3,
  },
});

export default CheckOutPage;
