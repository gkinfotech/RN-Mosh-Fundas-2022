import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="center"
        style={styles.imageContainer}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;

//Setting up the material design icons for IOS 
//IOS => https://medium.com/clarusway/setting-up-react-native-vector-icons-for-ios-a5d57e78cdb2
//Android => https://stackoverflow.com/questions/38878852/react-native-vector-icons-wont-show-in-android-device
// https://oblador.github.io/react-native-vector-icons/