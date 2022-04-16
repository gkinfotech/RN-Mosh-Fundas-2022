import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  // We have one parent and 3 child views having the Flex:1 3 child views shoud evenly occupy the space
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'dodgerblue', flex: 1}} />
      <View style={{backgroundColor: 'gold', flex: 1}} />
      <View style={{backgroundColor: 'tomato', flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
});
