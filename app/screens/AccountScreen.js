import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Screens from '../components/Screens';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

export default function AccountScreen() {
  const menuItems = [
    {
      title: 'My Listings',
      icon: {
        name: 'format-list-bulleted',
        backgroundColor: colors.primary,
      },
    },
    {
      title: 'My Messages',
      icon: {
        name: 'email',
        backgroundColor: colors.secondary,
      },
    },
  ];
  return (
    <Screens style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="GokulaKrishnan E"
          subTitle="gokul.krish55@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});