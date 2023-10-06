import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Noteworthy2 from './noteworthy';
import AllContributions from './All';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const ActiveScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 100}}>Active task</Text>
      <Text style={{color: 'black', fontSize: 100}}>Active task</Text>
    </ScrollView>
  );
};

const ActiveScreen2 = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
      }}>
      <Text style={{color: 'black', fontSize: 100}}>Active task 2</Text>
    </ScrollView>
  );
};

const CustomTab = ({title, onPress, isActive}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? '#DBEAFE' : '#E2E8F0',
        borderRadius: 20, // Adjust this value to control the capsule shape
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginHorizontal: 3,
      }}
      onPress={onPress}>
      <Text style={{color: isActive ? '#1D4ED8' : '#475569', fontSize: 16}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const UIApp2 = () => {
  return (
    // <GestureHandlerRootView>
    // <NavigationContainer>
    <Tab.Navigator
      // initialRouteName="All contributions"
      screenOptions={{
        tabBarShowIcon: true, // Hide default icons
        tabBarShowLabel: true, // Hide default labels
      }}
      // tabBar={props => (
      //   <View
      //     style={{
      //       flexDirection: 'row',
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       padding: 10,
      //       backgroundColor: 'pink',
      //     }}>
      //     <CustomTab
      //       title="All contributions"
      //       onPress={() => props.navigation.navigate('All contributions')}
      //       isActive={props.state.index === 0}
      //     />
      //     <CustomTab
      //       title="Active"
      //       onPress={() => props.navigation.navigate('Active tasks')}
      //       isActive={props.state.index === 1}
      //     />
      //     <CustomTab
      //       title="Noteworthy"
      //       onPress={() =>
      //         props.navigation.navigate('Noteworthy contributions')
      //       }
      //       isActive={props.state.index === 2}
      //     />
      //   </View>
      // )}
    >
      {/* <Tab.Screen name="All contributions" component={AllContributions} /> */}
      <Tab.Screen name="Active tasks" component={ActiveScreen} />
      <Tab.Screen name="Noteworthy contributions" component={ActiveScreen2} />
      {/* <Tab.Screen name="test screen" component={ActiveScreen2} /> */}
    </Tab.Navigator>
    // </NavigationContainer>
    // </GestureHandlerRootView>
  );
};

export default UIApp2;
