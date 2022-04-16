import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  // 7- Flexbox- flexWrap and alignContent
  // FlexWrap - used in overflow situation
  // if we add flexWrap: 'wrap' ->  alignItems: 'center' behaves differently the items will be moved to top
  // inorder to rectify above issue we need to add alignContent: 'center'
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
      <View style={{backgroundColor: 'grey', width: 100, height: 100}} />
      <View style={{backgroundColor: 'greenyellow', width: 100, height: 100}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    flexDirection: 'row', // horizontal
    justifyContent: 'center', // main Axis
    alignItems: 'center', //secondary Axis
    alignContent: 'center',
    flexWrap: 'wrap',
  },
});
