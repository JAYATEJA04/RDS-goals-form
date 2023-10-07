/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import DropDown, {selectedDuration} from './dropdown';
import Calendar2, {dateData} from './calendar2';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import postData from '../API/POST';

export let titleTextData, descriptionTextData;

const MainScreen = ({navigation}) => {
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  titleTextData = titleText;
  descriptionTextData = descriptionText;

  return (
    <ScrollView style={styles.container}>
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
            color: '#2827CC',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Create New Goal
        </Text>
        <Text style={styles.titles}>Title</Text>
        <TextInput
          style={styles.inputStyle}
          maxLength={50}
          placeholder="Enter title max of 50 characters."
          value={titleText}
          onChangeText={setTitleText}
        />
        <Text style={styles.titles}>Description</Text>
        <TextInput
          style={styles.inputStyle}
          maxLength={200}
          placeholder="Enter max 200 characters."
          value={descriptionText}
          onChangeText={setDescriptionText}
        />
        <Text style={styles.titles}>Duration</Text>
        <DropDown />
        <Text style={styles.titles}>DeadLine</Text>
        <Calendar2 />
        <TouchableOpacity
          style={styles.createButtonStyle}
          onPress={() => postData()}>
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 10,
    backgroundColor: 'silver',
    borderRadius: 5,
    fontSize: 12,
  },
  titles: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 20,
    color: 'black',
  },
  createButtonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
  createButtonStyle: {
    padding: 10,
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#2827CC',
  },
});

export default MainScreen;
