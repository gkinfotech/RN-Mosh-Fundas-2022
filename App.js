import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

import AppText from './app/components/AppText';

export default function App() {
  //06 Encapsulating the text style
  // Custom Text Components
  return (
    <View style={styles.container}>
      <AppText>I Like React Native</AppText>
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
