import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';

const CalendarView = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      }}
      // Specify the current date
      // current={'2012-03-01'}
      // Callback that gets called when the user selects a day
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Mark specific dates as marked
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
      // theme
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e',
      }}
    />
  );
};

export default CalendarView;
