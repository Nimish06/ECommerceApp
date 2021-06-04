import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  Alert,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import FormButtons from '../components/FormButtons';
import FormInput from '../components/FormInput';
import SocialButtons from '../components/SocialButtons';
import auth from '@react-native-firebase/auth';
GoogleSignin.configure();

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const login = async (email: any, password: any) => {
    let response = await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success ✅', 'Authenticated successfully');
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Sorry!! Try Again..!!');

          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log('USER', userInfo);
      const fullName = 'Welcome ' + userInfo.user.givenName;
      navigation.navigate('Home', {name: fullName});

      // setuserInfo({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/shopping_cart_racing.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>SHOPIFY</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail: any) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword: any) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButtons
        buttonTitle="Sign In"
        // onPress={login(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButtons
            buttonTitle="Sign In with Google"
            btnType="google"
            color="white"
            backgroundColor="#de4d41"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 170,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 28,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

export default LoginScreen;
