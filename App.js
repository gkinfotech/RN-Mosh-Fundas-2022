import {StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';

export default function App() {
  //Alert Prompt will work only for IOS
  const handleAlert = () =>
    Alert.alert('Alert Title', 'Alert Text', [
      {text: 'Yes', onPress: () => console.log('Yes Button tapped')},
      {text: 'No', onPress: () => console.log('No Button tapped')},
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me!" onPress={handleAlert} />
      <Button
        title="Input Prompt"
        onPress={() =>
          Alert.prompt('Prompt Title', 'Prompt Description', text =>
            console.log(text),
          )
        }
      />
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
