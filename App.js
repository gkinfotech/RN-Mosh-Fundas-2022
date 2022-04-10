import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import React from 'react';

export default function App() {
  const handlePress = () => console.log('Button Clicked!');
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me!" onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
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
