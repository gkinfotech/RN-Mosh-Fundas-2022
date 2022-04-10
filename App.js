import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

export default function App() {
  // TouchableHighlight => A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.
  //TouchableOpacity => A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
  //TouchableWithoutFeedback - TouchableWithoutFeedback supports only one child. If you wish to have several child components, wrap them in a View. Importantly, TouchableWithoutFeedback works by cloning its child and applying responder props to it
  // TouchableNativeFeedback - A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback

  const clickHandler = () => console.log('Touchables Button Pressed!');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>Hello Gokul</Text>
      <TouchableWithoutFeedback onPress={clickHandler}>
        <Image
          blurRadius={5}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 200,
            uri: 'https://picsum.photos/seed/picsum/200/300',
          }}
        />
      </TouchableWithoutFeedback>
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
