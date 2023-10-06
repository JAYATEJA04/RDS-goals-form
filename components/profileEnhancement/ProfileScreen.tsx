import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import ContributionData from './getUserContributionData';
import UserData from './getUserData';
import AllContributionsDropdown from './DataCatogories/allContribution';
import NoteworthyContributionsDropdown from './DataCatogories/noteWorthy';
import ExpandableList from './expandableList';

const ProfileScreen = () => {
  const [contributionData, setContributionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.realdevsquad.com/contributions/ankush',
        );
        const jsonData = await response.json();
        setContributionData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Hi</Text>
      <Text>Hello</Text>
      <SafeAreaView>
        <ExpandableList data={contributionData} />
      </SafeAreaView>
      {/* <NoteworthyContributionsDropdown userContri={contributionData} />
      <AllContributionsDropdown userContri={contributionData} />
      <AllContributionsDropdown userContri={contributionData} />
      <AllContributionsDropdown userContri={contributionData} /> */}

    </View>
  );
};

export default ProfileScreen;
