import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

import AppText from './app/components/AppText';
import Icon from 'react-native-vector-icons/Fontisto';

export default function App() {
  //07 - React Native Vector Icons
  // https://www.npmjs.com/package/react-native-vector-icons#icon-component
  return (
    <View style={styles.container}>
      <AppText>I Like React Native</AppText>
      <Icon name="email" size={40} color="#900"></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
