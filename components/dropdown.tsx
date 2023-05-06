/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
const countries = [
  {names: 'Short term'},
  {names: 'Mid term'},
  {names: 'Long term'},
];
const DropDown = () => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          elevation: 5,
          borderRadius: 10,
          backgroundColor: 'white',
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontWeight: '600', color: 'black'}}>
          {selectedCountry === '' ? 'Select duration' : selectedCountry}
        </Text>
        {clicked ? (
          <Text style={{color: 'black', fontSize: 20}}>-</Text>
        ) : (
          <Text style={{color: 'black', fontSize: 20}}>+</Text>
        )}
      </TouchableOpacity>
      {clicked ? (
        <FlatList
          style={{
            elevation: 5,
            marginTop: 20,
            height: 100,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '85%',
                  alignSelf: 'center',
                  height: 50,
                  justifyContent: 'center',
                  borderBottomWidth: 0.5,
                }}
                onPress={() => {
                  setSelectedCountry(item.names);
                  setClicked(!clicked);
                }}>
                <Text style={{fontWeight: '600', color: 'black'}}>
                  {item.names}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default DropDown;
