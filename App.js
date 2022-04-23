import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  //Borders
  // To make view as circle widhr,Height100 and borderRadius=50
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'royalblue',
          borderRadius: 50,
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
