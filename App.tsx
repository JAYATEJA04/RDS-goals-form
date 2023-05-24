import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './components/GoalsScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          padding: 10,
          borderRadius: 20,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('Form screen')}>
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
}

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form screen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
