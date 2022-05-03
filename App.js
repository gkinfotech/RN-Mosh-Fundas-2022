import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import colors from './app/config/colors';
import MessageScreen from './app/screens/MessageScreen';
import Screens from './app/components/Screens';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import {TextInput} from 'react-native-gesture-handler';

export default function App() {
  const [firstName, setfirstName] = useState('');
  return (
    <Screens>
      <Text>{firstName}</Text>
      <TextInput
      secureTextEntry
        placeholder="Enter the Text Input"
        onChangeText={text => setfirstName(text)}
        style={{borderBottomColor: colors.lightGrey, borderBottomWidth: 1}}
      />
    </Screens>
  );
}

/*
 <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppButton title="Login" onPress={() => console.log('Button Pressed!')} />
    </View>


    <View style={styles.container}>
      <Image
        style={{
          width: '30%',
          height: '20%',
          alignSelf: 'center',
          resizeMode: 'stretch',
          marginTop: 40,
        }}
        source={require('./app/assets/logo-red.png')}
      />
      <Image
        style={{width: '100%', flex: 5}}
        source={require('./app/assets/background.jpg')}
      />

      <View style={{backgroundColor: 'tomato', flex: 0.5}} />
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 0.5,
        }}
      />
    </View>
    const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
});
*/

/*
04- Card Components
  <View
      style={{
        backgroundColor: colors.lightGrey,
        padding: 20,
        paddingTop: 100,
      }}>
      <Card
        title="Red jacket for $2"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>


    05-Listing Details Screen  <ListingDetailsScreen
      title="Red jacket for Sale"
      SubTitle="$100"
      image={require('./app/assets/jacket.jpg')}
    />


     <Icon name="email" size={50} backgroundColor="red" iconColor="white" />

      <Screens>
      <ListItem
        title="GokulaKrishnan E"
        ImageComponent={
          <Icon
            name="email"
            size={50}
            backgroundColor="red"
            iconColor="white"
          />
        }
      />
    </Screens>
*/
