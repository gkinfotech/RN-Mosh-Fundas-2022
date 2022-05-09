import {Button, Modal, Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screens from './Screens';
import PickerItem from './PickerItem';
import AppButton from './AppButton';
export default function AppPicker({icon, items, placeholder, onSelectItem, selectedItem}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.iconStyle}
            />
          )}
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screens>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screens>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  iconStyle: {
    marginRight: 10,
  },
});