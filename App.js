import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  // FlexBox - JustifyContent, alignItems, alignSelf
  //  justifyContent: space-evenly |space-between | space-around
  //alignItems:  baseline | center | flex-end | flex-start | stretch
  // alignSelf: baseline | center | flex-end | flex-start | auto if you want to change particular view alone
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          //alignSelf: 'center',
        }}
      />
      <View style={{backgroundColor: 'gold', width: 100, height: 100}} />
      <View style={{backgroundColor: 'tomato', width: 100, height: 100}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    flexDirection: 'row', // horizontal
    justifyContent: 'center', // main Axis
    alignItems: 'stretch', //secondary Axis
  },
});
