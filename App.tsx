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
import NavigationFile from './NavigationFile';
import {NavigationContainer} from '@react-navigation/native';
import CartContextProvider from './utilities/CartContext';
const AppWrapper = () => {
  return (
    <CartContextProvider>
      <App />
    </CartContextProvider>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <NavigationFile></NavigationFile>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppWrapper;
