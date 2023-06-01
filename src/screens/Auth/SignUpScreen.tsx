// Create a signup screen with email and password fields

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { useNavigation } from '@react-navigation/native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  form: {
    width: '80%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
});

const SignUpScreen = () => {
  const { t } = useTranslation(['signup']);
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, setLoggedIn] = useState(false);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Login');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  };

  return (
    <View
      style={[
        Layout.fill,
        Layout.colCenter,
        Layout.justifyContentCenter,
        Layout.alignItemsCenter,
      ]}
    >
      <Image source={Images.logo} style={[styles.logo]} />
      <View style={[styles.form]}>
        <TextInput
          style={[styles.input]}
          onChangeText={setEmail}
          value={email}
          placeholder={'email'}
        />
        <TextInput
          style={[styles.input]}
          onChangeText={setPassword}
          value={password}
          placeholder={'password'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[Common.buttonPrimary, styles.button]}
          onPress={handleSignUp}
        >
          <Text style={[Fonts.textRegular, Fonts.textCenter]}>
            {t('signup')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonText]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[Fonts.textRegular, Fonts.textCenter]}>
            {t('login')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
