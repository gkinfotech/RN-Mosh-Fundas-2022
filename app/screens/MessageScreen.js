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
import React, {useState} from 'react';
import ListItem from '../components/ListItem';
import Screens from '../components/Screens';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
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
  // console.log('Test', StatusBar.currentHeight);
  // console.log('Test1', Dimensions.get('window').height);
  const [messsages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    //1. Delete message from message array
    setMessages(messsages.filter(m => m.id !== message.id));
    //2.Call the server
  };
  return (
    <Screens>
      <FlatList
        data={messsages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({});
