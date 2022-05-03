import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screens from '../components/Screens';
import Card from '../components/Card';
import colors from '../config/colors';

export default function ListingScreen() {
  const listings = [
    {
      id: 1,
      title: 'Red Jacket for sale!',
      price: 100,
      image: require('../assets/jacket.jpg'),
    },
    {
      id: 2,
      title: 'Couch in Great Condition!',
      price: 1000,
      image: require('../assets/couch.jpg'),
    },
  ];
  return (
    <Screens style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.lightGrey,
  },
});
