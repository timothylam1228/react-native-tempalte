// Create a login form with email and password fields

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
import { auth } from '../../services/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

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
    height: 40,
    marginBottom: 10,
  },
  buttonText: {
    width: '40%',
    display: 'flex',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  linkView: {
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-around',
    // backgroundColor: 'green',
    itemAlign: 'flex-end',
    textAlign: 'right',
  },
});

const LoginScreen = () => {
  if (auth.currentUser) {
    console.log(auth.currentUser);
  }
  const { t } = useTranslation(['login']);
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const handleLogin = () => {
  //     console.log('handle');
  onAuthStateChanged(auth, user => {
    if (user) {
      navigation.navigate('Main');
    } else {
      console.log('no user');
    }
  });
  //   };

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Image source={Images.logo} style={styles.logo} />
      <View style={styles.form}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          placeholder={'passowrd'}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[Common.buttonPrimary, styles.button]}
          onPress={() => logInWithEmailAndPassword(email, password)}
        >
          <Text style={[Common.buttonText]}>{t('login:login')}</Text>
        </TouchableOpacity>
        <View style={[styles.linkView]}>
          <TouchableOpacity
            style={[styles.buttonText]}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[Common.linkText]}>{t('login:register')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonText]}
            onPress={() => navigation.navigate('ForgetPassword')}
          >
            <Text style={[Common.linkText]}>{t('login:forgetpassword')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
