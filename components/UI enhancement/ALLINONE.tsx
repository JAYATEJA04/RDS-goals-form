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
  Animated,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Noteworthy2 from './components/UI enhancement/noteworthy';
import AllContributions from './components/UI enhancement/All';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UIApp2 from './components/UI enhancement/MainUI';
// import UserProfile from './components/UI enhancement/UserProfile';
import UserPage from './components/UI enhancement/UserProfile';
import UserData from './components/UI enhancement/UserData';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Screen1 = () => {
  return (
    //
    <View>
      <Text style={{color: 'black'}}>hello world</Text>
    </View>
  );
};

const Screen2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['All', 'Active', 'Noteworthy'];
  const renderContent = index => {
    switch (index) {
      case 0:
        return <AllContributions />;
      case 1:
        return <Text>Content for Tab 2</Text>;
      case 2:
        return <Noteworthy2 />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Text style={styles.Text}>Hello world</Text>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              index === activeTab && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(index)}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>{renderContent(activeTab)}</View>
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Screen 1" component={Screen1} />
        <BottomTab.Screen name="Screen 2" component={UserPage} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 100,
    color: 'black',
  },
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  tabButton: {
    flex: 1,
    height: 40,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  activeTabButton: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

export default App;
