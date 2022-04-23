import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  // 9- Absolute and Relative position
  //Absolute -> the view aligned to parent for eg: if we set position:'absolute' the view will moving towards to the parent
  //Relative -> the view wont be check for parent it will align the view relative to the position

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
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: 'absolute',
        }}
      />
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
