import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen({image, title, SubTitle}) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{SubTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="GokulaKrishnan E"
            subTitle="5 Listing"
            image={require('../assets/mosh.jpg')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});
