import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screens from '../components/Screens';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AppText from '../components/AppText';

export default function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });
  return (
    <Screens style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors}) => (
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
            <AppText style={{color: colors.danger}}>{errors.email}</AppText>
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <AppText style={{color: colors.danger}}>{errors.password}</AppText>
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
