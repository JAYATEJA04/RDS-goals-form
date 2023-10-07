import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';

const AllContributionsDropdown = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const [contributionData, setContributionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.realdevsquad.com/contributions/ankush',
        );
        const jsonData = await response.json();
        setContributionData(jsonData.all);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setClicked(!clicked)}
        style={styles.DropDownButton}>
        <Text style={styles.DropDownTitle}>All Contributions</Text>
      </TouchableOpacity>
      {clicked ? (
        <FlatList
          data={userContri.all}
          style={styles.DropDownElement}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.DropDownbackground}
              onPress={
                item.task.featureUrl
                  ? () => Linking.openURL(item.task.featureUrl)
                  : null
              }>
              <Text style={{color: 'blue', fontSize: 15}}>
                {item.task.title}
              </Text>
              <Text style={{color: 'black', padding: 10}}>
                {item.task.purpose}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  padding: 10,
                }}>
                Estimated completion: {item.task.startedOn - item.task.endsOn}
              </Text>
              <Text style={{color: 'grey'}}>
                Checkout this feature in action
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  DropDownButton: {
    width: 400,
    height: 50,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  DropDownTitle: {
    fontWeight: '600',
    color: 'black',
  },
  DropDownElement: {
    color: 'black',
    width: '100%',
    alignSelf: 'center',
    height: 'auto', //.
    borderBottomWidth: 0.5,
  },
  DropDownElementt: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  DropDownbackground: {
    padding: 10,
    marginTop: 20,
    height: 'auto',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default AllContributionsDropdown;
