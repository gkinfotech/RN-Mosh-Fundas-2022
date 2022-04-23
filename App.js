import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  // 8- Flexbox- flexBasis, flexGrow and flexShrink
  //flexBasis -> Similar to height or width
  //FleGrow - >Similar to Flex value
  //FlexShrink -> if the view is overflowing then shrink the view and also if we give Flex =-1 it is equal to flexshrink-1

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          // flexBasis: 100, // width or Height
          // flexGrow: 1,
          width: 400,
          flexShrink: 1,
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
    alignItems: 'center', //secondary Axis
  },
});
