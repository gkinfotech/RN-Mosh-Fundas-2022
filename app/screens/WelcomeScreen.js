import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';

export default function welcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.imgBackground}
      source={require('../assets/background.jpg')}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell what you dont Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  tagLine: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
