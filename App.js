import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  // By Default RN Verically aligns the View
  // By Adding flexDirection: 'row'=> Views are Horizontally aligned
  // By Adding flexDirection: 'row-reverse'=> Views are Horizontally aligned with left to Right
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'dodgerblue', width: 100, height: 100}} />
      <View style={{backgroundColor: 'gold', width: 100, height: 100}} />
      <View style={{backgroundColor: 'tomato', width: 100, height: 100}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    flexDirection: 'row',
  },
});
