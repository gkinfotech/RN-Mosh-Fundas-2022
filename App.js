import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  //03. Shadows
  // To make view as circle widhr,Height100 and borderRadius=50
  // IOS -> Shadow Radius
  //Android -> elevation
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          shadowColor: 'grey',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 30,
        }}
      />
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
