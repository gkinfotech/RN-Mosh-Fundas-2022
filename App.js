import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  //Excercise 01 Login Screen
  return <ViewImageScreen />;
}

/*
    <View style={styles.container}>
      <Image
        style={{
          width: '30%',
          height: '20%',
          alignSelf: 'center',
          resizeMode: 'stretch',
          marginTop: 40,
        }}
        source={require('./app/assets/logo-red.png')}
      />
      <Image
        style={{width: '100%', flex: 5}}
        source={require('./app/assets/background.jpg')}
      />

      <View style={{backgroundColor: 'tomato', flex: 0.5}} />
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 0.5,
        }}
      />
    </View>
    const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
});
*/
