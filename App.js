import {StyleSheet, SafeAreaView, Button, Alert, Platform} from 'react-native';
import React from 'react';

export default function App() {
  //Platfrom OS will help differentiate Styles from Android/IOS
  const handleAlert = () =>
    Alert.alert('Alert Title', 'Alert Text', [
      {text: 'Yes', onPress: () => console.log('Yes Button tapped')},
      {text: 'No', onPress: () => console.log('No Button tapped')},
    ]);
  const containerStyle = {backgroundColor: 'orange'};
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me!" onPress={handleAlert} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'android' ? 'tomato' : 'orange',
  },
});
