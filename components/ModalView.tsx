import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import CalendarView from './calendar';

const ModalView = () => {
  const [showmodal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.modalStyle}
        onPress={() => setShowModal(true)}>
        <Text style={styles.textStyle}>Open Calendar</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showmodal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal(!showmodal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.calendarStyle}>
            <CalendarView />
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
              }}
              style={styles.calendarOpenStyle}>
              <Text style={styles.calendarOpenTextStyle}>Close Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 40,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  calendarStyle: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    borderWidth: 3,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  calendarOpenStyle: {
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 40,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  calendarOpenTextStyle: {
    color: 'white',
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default ModalView;
