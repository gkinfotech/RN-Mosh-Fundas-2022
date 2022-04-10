import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  //UseDimensions hooks helps to identify the Orienttion screen
  //npm i @react-native-community/hooks
  // Consider the scenario Portrait mode => 50% screen should occupy if it is in Landscape occupy full screen
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: landscape ? '100%' : '30%',
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
