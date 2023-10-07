import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Linking,
} from 'react-native';

const NoteworthyContributionsDropdown = ({userContri}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setClicked(!clicked)}
        style={styles.DropDownButton}>
        <Text style={styles.DropDownTitle}>Noteworthy Contributions</Text>
      </TouchableOpacity>
      {clicked ? (
        <FlatList
          data={userContri.noteworthy}
          style={styles.DropDownElement}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.DropDownbackground}
              onPress={() => Linking.openURL(item.task.featureUrl)}>
              <Text
                style={{color: 'blue', fontSize: 15}}
                onPress={() => Linking.openURL(item.task.featureUrl)}>
                {item.task.title}
              </Text>
              <Text style={{color: 'grey', padding: 10}}>
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
    fontSize: 30,
    color: 'black',
  },
  DropDownElement: {
    color: 'black',
    width: 'auto',
    alignSelf: 'center',
    height: 100,
    borderBottomWidth: 0.5,
  },
  DropDownbackground: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    height: 'auto',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default NoteworthyContributionsDropdown;
