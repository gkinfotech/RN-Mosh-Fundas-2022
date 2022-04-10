import {StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';

export default function App() {
  const handleAlert = () =>
    Alert.alert('Alert Title', 'Alert Text', [
      {text: 'Yes', onPress: () => console.log('Yes Button tapped')},
      {text: 'No', onPress: () => console.log('No Button tapped')},
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me!" onPress={handleAlert} />
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
});
