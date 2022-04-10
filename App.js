import {StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';

export default function App() {
  //Alert Prompt will work only for IOS
  const handleAlert = () =>
    Alert.alert('Alert Title', 'Alert Text', [
      {text: 'Yes', onPress: () => console.log('Yes Button tapped')},
      {text: 'No', onPress: () => console.log('No Button tapped')},
    ]);
  const containerStyle = {backgroundColor: 'orange'};
  return (
    //StyleSheet validates the input object
    // We can also declare the separate style like containerStyle (const containerStyle = {backgroundColor: 'orange'};)
    // The main advantages here if we did any typo using declare technique it wont validate App will run but stylesheet always expect the input and output
    //Array of styles style={[styles.container,containerStyle]} -> result is combination of two styles Right style(containerStyle) overrides the properties of left style(container)
    <SafeAreaView style={[styles.container, containerStyle]}>
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
