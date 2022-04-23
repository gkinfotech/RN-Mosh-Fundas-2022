import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';

import colors from '../config/colors';

export default function welcomeScreen() {
  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require('../assets/background.jpg')}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you dont Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  logocontainer: {
    top: 70,
    alignItems: 'center',
    position: 'absolute',
  },
  logo: {
    width: 100,
    height: 100,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});
