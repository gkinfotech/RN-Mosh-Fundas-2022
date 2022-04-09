import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function App() {
  let longText =
    'React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.';
  const handlePress = () => console.log('Text Clicked!');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>Hello Gokul</Text>
      <Text
        style={styles.containerTextPara}
        numberOfLines={1}
        onPress={handlePress}>
        {longText}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  containerTextPara: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
