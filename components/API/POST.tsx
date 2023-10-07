import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import DropDown, {selectedDuration} from '../FormTask/dropdown';
import MainScreen, {descriptionTextData, titleTextData} from '../FormTask/GoalsScreen';
import Calendar2, {dateData} from '../FormTask/calendar2';

const postData = async () => {
  const url = 'https://649deb2d9bac4a8e669e738c.mockapi.io/goals';
  let request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          type: 'Goal',
          id: '',
          attributes: {
            title: titleTextData,
            description: descriptionTextData,
            created_at: '2023-06-22T00:08:38.695783Z',
            created_by: '',
            assigned_to: '0ujQy59TVrdoKgR1PKFp',
            starts_on: null,
            ends_on: null,
            percentage_completed: 20,
            assigned_by: '',
            status: 'COMPLETED',
          },
        },
      ],
    }),
  });
  request = await request.json();
  if (request) {
    Alert.alert('Goal has been created succesfully');
  }
};

export default postData;
