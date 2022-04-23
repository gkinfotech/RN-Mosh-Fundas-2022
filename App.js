import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function App() {
  //05. Test Style
  //Styling props=> Android: fontFamily: 'Roboto'| IOS 'Courier'
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontStyle: 'italic',
          fontFamily: 'Courier',
          color: 'tomato',
          textTransform: 'capitalize',
          textDecorationLine: 'line-through',
          textAlign: 'center',
          lineHeight: 30,
        }}>
        I Like React Native
      </Text>
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
