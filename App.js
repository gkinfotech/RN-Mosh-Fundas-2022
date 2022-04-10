import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';

export default function App() {
  //Dimensions helps to identify the screen size
  console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '50%',
          height: 70,
        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
