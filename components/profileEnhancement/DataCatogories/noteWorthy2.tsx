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
  FlatList,
} from 'react-native';

const Noteworthy2 = () => {
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
        setContributionData(jsonData.noteworthy);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const convertTimestampToReadableDate = timestamp => {
    return new Date(timestamp * 1000);
  };
  const calculateTimeDifference = (startDate, endDate) => {
    const timeDifference = endDate - startDate;
    const secondsInMillisecond = 1000;
    const minutesInMillisecond = 60 * secondsInMillisecond;
    const hoursInMillisecond = 60 * minutesInMillisecond;
    const daysInMillisecond = 24 * hoursInMillisecond;
    const weeksInMillisecond = 7 * daysInMillisecond;
    const monthsInMillisecond = 30.44 * daysInMillisecond; // Average month length
    const yearsInMillisecond = 365 * daysInMillisecond;

    if (timeDifference < minutesInMillisecond) {
      return `${Math.floor(timeDifference / secondsInMillisecond)} seconds`;
    } else if (timeDifference < hoursInMillisecond) {
      return `${Math.floor(timeDifference / minutesInMillisecond)} minutes`;
    } else if (timeDifference < daysInMillisecond) {
      return `${Math.floor(timeDifference / hoursInMillisecond)} hours`;
    } else if (timeDifference < weeksInMillisecond) {
      return `${Math.floor(timeDifference / daysInMillisecond)} days`;
    } else if (timeDifference < monthsInMillisecond) {
      return `${Math.floor(timeDifference / weeksInMillisecond)} weeks`;
    } else if (timeDifference < yearsInMillisecond) {
      return `${Math.floor(timeDifference / monthsInMillisecond)} months`;
    } else {
      return `${Math.floor(timeDifference / yearsInMillisecond)} years`;
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.TouchButton}
        onPress={() => setClicked(!clicked)}>
        <Text style={styles.TouchButtonText}>
          See how noteworthy contributions works.
        </Text>
      </TouchableOpacity>
      {clicked ? (
        <View>
          {contributionData.map((item, index) => (
            <View style={styles.DropDownElement} key={index}>
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
                <>
                  {item.task.purpose ? (
                    <Text style={{color: 'black', fontSize: 12, padding: 10}}>
                      {item.task.purpose}
                    </Text>
                  ) : null}
                </>
                <Text style={{color: 'black', fontSize: 15}}>
                  Estimated completion:{''}
                  {calculateTimeDifference(
                    convertTimestampToReadableDate(item.task.startedOn),
                    convertTimestampToReadableDate(item.task.endsOn),
                  )}
                </Text>
                <>
                  {item.task.featureUrl ? (
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 10,
                        textAlign: 'center',
                      }}>
                      Checkout this feature in action
                    </Text>
                  ) : null}
                </>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#51E1ED',
  },
  container2: {
    padding: 10,
    backgroundColor: '#50DBB4',
    borderWidth: 2,
    borderRadius: 5,
    borderEndColor: 'black',
  },
  TouchButton: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    margin: 10,
  },
  TouchButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  DropDownElement: {
    color: 'black',
    width: '100%',
    alignSelf: 'center',
    height: 'auto', //.
    borderBottomWidth: 0.5,
  },
  DropDownbackground: {
    padding: 20,
    margin: 10,
    height: 'auto',
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Noteworthy2;
