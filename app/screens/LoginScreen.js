import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import Screens from '../components/Screens';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
  return (
    <Screens style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              icon="email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardtype="email-address"
              onChangeText={handleChange('email')}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screens>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
