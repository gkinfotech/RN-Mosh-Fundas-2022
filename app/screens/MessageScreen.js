import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';
import Screens from '../components/Screens';
import ListItemSeparator from '../components/ListItemSeparator';

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
  console.log('Test', StatusBar.currentHeight);
  console.log('Test1', Dimensions.get('window').height);
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => (
        <Screens>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        </Screens>
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

const styles = StyleSheet.create({});
