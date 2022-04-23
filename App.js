import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  //04. Padding VS Margin
  // Padding: space inside the view
  // Margin: Space Ouside the view
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
        }}>
        <View
          style={{
            backgroundColor: 'gold',
            width: 50,
            height: 50,
            paddingHorizontal: 10,
          }}
        />
      </View>
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
