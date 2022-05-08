import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Screens from '../components/Screens';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screens style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        icon="email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardtype="email-address"
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize="none"
        icon="lock"
        placeholder="Password"
        textContentType="password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <AppButton title="login" onPress={() => console.log(email, password)} />
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
