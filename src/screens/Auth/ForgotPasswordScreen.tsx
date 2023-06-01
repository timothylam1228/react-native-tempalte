// Create a forget password screen with email field

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

import { sendPasswordResetEmail } from 'firebase/auth';
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

const ForgotPasswordScreen = () => {
  const { t } = useTranslation(['forgetPassword']);
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Email sent');
      })
      .catch(error => {
        Alert.alert(error.message);
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
          placeholder={'forgetPassword:email'}
        />
        <TouchableOpacity
          style={[Common.buttonPrimary]}
          onPress={handleForgetPassword}
        >
          <Text style={[Common.buttonText, Fonts.textRegular]}>
            {t('forgetPassword:send')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
