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
  Image,
} from 'react-native';

const AllContributions = () => {
  const [clicked, setClicked] = useState(false);
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

  const calculateISODateFormat = isoDateString => {
    const date = new Date(isoDateString);
    const formatDate = date => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return `${day} ${months[monthIndex]}, ${year}`;
    };
    const formattedDate = formatDate(date);
    return formattedDate;
  };

  const parseISODate = isoDateString => {
    return new Date(isoDateString);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.TouchButton}
        onPress={() => setClicked(!clicked)}>
        <Text style={styles.TouchButtonText}>
          See how all contribution works.
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
                {item.task.id ? (
                  <React.Fragment>
                    <Text style={{color: 'blue', fontSize: 18}}>
                      {item.task.title}
                    </Text>
                    <Text style={{color: 'black', padding: 10}}>
                      {item.task.purpose}
                    </Text>
                    <>
                      {item.task.featureUrl ? (
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 13,
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            padding: 10,
                          }}>
                          Estimated completion:{' '}
                          {calculateTimeDifference(
                            convertTimestampToReadableDate(item.task.startedOn),
                            convertTimestampToReadableDate(item.task.endsOn),
                          )}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 13,
                            padding: 10,
                          }}>
                          Estimated completion:{' '}
                          {calculateTimeDifference(
                            convertTimestampToReadableDate(item.task.startedOn),
                            convertTimestampToReadableDate(item.task.endsOn),
                          )}
                        </Text>
                      )}
                    </>
                    <>
                      {item.task.featureUrl ? (
                        <Text style={{color: 'grey'}}>
                          Checkout this feature in action
                        </Text>
                      ) : null}
                    </>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {item.prList.length > 0 && (
                      <React.Fragment>
                        <Text style={{color: 'blue', fontSize: 18}}>
                          PR Title: {item.prList[0].title}
                        </Text>
                        <Text style={{color: 'black', padding: 5}}>
                          Completed in:{' '}
                          {calculateTimeDifference(
                            parseISODate(item.prList[0].createdAt),
                            parseISODate(item.prList[0].updatedAt),
                          )}
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            padding: 5,
                          }}>
                          Feature live on:{' '}
                          {calculateISODateFormat(item.prList[0].updatedAt)}
                        </Text>
                        <>
                          {item.prList[0].url ? (
                            <Text style={{color: 'grey'}}>
                              Checkout this feature in action
                            </Text>
                          ) : null}
                        </>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : null}
    </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TouchButtonText: {
    height: 'auto',
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
    // borderBottomWidth: 1,
  },
  DropDownbackground: {
    padding: 20,
    margin: 5,
    height: 'auto',
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default AllContributions;
