import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Button,
  ScrollView,
  FlatList,
  StatusBar,
  Animated,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UIApp from './MainUI';
import UserData from './UserData';

const Stack = createNativeStackNavigator();

const UserPage = () => {
  return (
    <ScrollView
      style={styles.Container}
      contentContainerStyle={{
        // backgroundColor: 'white',
        padding: 10,
      }}>
      <UserData />
      <View style={{borderWidth: 1, flex: 3}}>
        <UIApp />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'pink',
  },
});

export default UserPage;
