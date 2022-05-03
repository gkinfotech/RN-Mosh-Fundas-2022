import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';
//import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subtitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '600',
  },
});

/*
Note: Swipeables are not working in Android
https://stackoverflow.com/questions/70545275/react-native-swipeable-gesture-not-working-on-android
https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/
https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable

*/
