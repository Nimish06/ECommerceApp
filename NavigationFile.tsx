import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {windowWidth, windowHeight} from './utilities/Dimensions';
import LoginScreen from './screens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import Items from './components/Items';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckOutPage from './screens/CheckOutPage';
import HeaderHome from './components/HeaderHome';
import {useCartContext} from './utilities/CartContext';
const Stack = createStackNavigator();
const NavigationFile = () => {
  const {deleteItems} = useCartContext();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: 'Login',
          headerStyle: {
            backgroundColor: '#f9fafd',

            shadowColor: '#f9fafd',
            elevation: 3,
          },
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <FontAwesome.Button
                name="arrow-left"
                size={22}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',

            shadowColor: '#f9fafd',
            elevation: 3,
          },
          headerRight: () => (
            <View>
              {/* <View style={{marginRight: 5}}> */}
              {/* <Text
        style={{
          fontSize: 13,
          marginLeft: 17,
          fontWeight: 'bold',
          marginBottom: -3,
        }}></Text> */}
              <HeaderHome navigation={navigation} />
              {/* <FontAwesome.Button
                  name="shopping-cart"
                  size={22}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('CheckOut')}
                /> */}
              {/* </View> */}
            </View>
          ),
        })}
      />
      {/* <Stack.Screen
        name="Items"
        component={Items}
        options={({navigation, route}) => ({
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <Text></Text>
              <FontAwesome.Button
                name="shopping-cart"
                size={22}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('CheckOut')}
              />
            </View>
          ),
        })}
      /> */}
      <Stack.Screen
        name="CheckOut"
        component={CheckOutPage}
        options={({navigation}) => ({
          title: 'Check Out',
          headerStyle: {
            backgroundColor: '#f9fafd',

            shadowColor: '#f9fafd',
            elevation: 3,
          },
          headerRight: () => (
            <View style={{marginRight: 5}}>
              {/* <Text
            style={{
              fontSize: 13,
              marginLeft: 17,
              fontWeight: 'bold',
              marginBottom: -3,
            }}>
            {itemList.length}
          </Text> */}
              <MaterialIcons.Button
                name="delete-sweep"
                size={26}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => deleteItems()}
              />
            </View>
          ),
        })}
        // options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default NavigationFile;
