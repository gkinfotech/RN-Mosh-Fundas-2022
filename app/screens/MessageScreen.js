import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

export default function MessageScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => (
        <SafeAreaView>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        </SafeAreaView>
      )}
    />
  );
}

const styles = StyleSheet.create({});
