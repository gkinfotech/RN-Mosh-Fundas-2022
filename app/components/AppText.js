import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import colors from '../config/colors';

import defaultStyles from '../config/styles';
//08 Platform Specific using platform Select

export default function AppText({children, style}) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({});

/*
Plstform OS Select Other Method
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
    }),
*/
