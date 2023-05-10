/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import DropDown from './components/dropdown';
import Calendar2 from './components/calendar2';

const MainApp = () => {
  return (
    <SafeAreaView style={[styles.container, {overflow: 'scroll'}]}>
      <View
        style={{
          borderWidth: 3,
          paddingTop: 20,
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 40,
          height: 650,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <Text
          style={{
            color: 'indigo',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Create New Goal.
        </Text>
        <Text style={styles.titles}>Title</Text>
        <TextInput
          style={styles.inputStyle}
          maxLength={50}
          placeholder="Enter title max of 50 characters."
        />
        <Text style={styles.titles}>Description</Text>
        <TextInput
          style={styles.inputStyle}
          maxLength={200}
          placeholder="Enter max 200 characters."
        />
        <Text style={styles.titles}>Duration</Text>
        <DropDown />
        <Text style={styles.titles}>DeadLine</Text>
        {/* <TextInput style={styles.inputStyle} placeholder="dd/mm/yyyy" /> */}
        {/* <ModalView /> */}
        <Calendar2 />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingLeft: 40,
    paddingRight: 40,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  inputStyle: {
    padding: 5,
    backgroundColor: 'silver',
    borderRadius: 5,
    fontSize: 10,
  },
  titles: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 20,
    color: 'black',
  },
});

export default MainApp;
