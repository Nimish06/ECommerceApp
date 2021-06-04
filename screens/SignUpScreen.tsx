import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import FormButtons from '../components/FormButtons';
import FormInput from '../components/FormInput';
import SocialButtons from '../components/SocialButtons';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const SignUpScreen = ({navigation}: any) => {
  const Stack = createStackNavigator();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  // const register = () => {
  //   if (!email) {
  //     setError('Email required *');
  //     setValid(false);
  //     return;
  //   } else if (!password && password.trim() && password.length > 6) {
  //     setError('Weak password, minimum 5 chars');
  //     setValid(false);
  //     return;
  //   }

  //   // createUser(email, password);
  // };
  const googleSignUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navigation.navigate('Home');

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

  const createUser = async (email: string, password: string) => {
    // let res = await auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     Alert.alert('Success ✅', 'Account created successfully');
    //     //   console.log('User account created & signed in!');
    //     navigation.navigate('Login');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });

    console.log('email', email);
    console.log('pass', password);
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success ✅', 'Account created successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Create Your Account</Text>

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

      {/* <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword:any) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      /> */}

      <FormButtons
        buttonTitle="Sign Up"
        // onPress={createUser(email, password)}
      />

      {Platform.OS === 'android' ? (
        <View>
          <SocialButtons
            buttonTitle="Sign In with Google"
            btnType="google"
            color="white"
            backgroundColor="#de4d41"
            // onPress={googleSignUp()}
          />
        </View>
      ) : null}
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

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

export default SignUpScreen;
