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

const UserData = () => {
  return (
    <View>
      <Text style={styles.Text}>A. Jaya Teja</Text>
      <Text style={styles.Text}>Jaya Teja</Text>
      <Text style={styles.Text}>Fresher</Text>
      <Text style={styles.Text}>Aspiring developer</Text>
      <Text style={styles.Text}>Aspiring developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 50,
  },
});

export default UserData;
