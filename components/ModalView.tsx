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
import Calendar from './calendar';

const ModalView = () => {
  const [showmodal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.modalStyle}
        onPress={() => setShowModal(true)}>
        <Text style={styles.textStyle}>Open Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showmodal} animationType="fade">
        <View style={styles.calendarStyle}>
          <Calendar />
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
            }}
            style={styles.calendarOpenStyle}>
            <Text style={styles.calendarOpenTextStyle}>Close Calendar</Text>
          </TouchableOpacity>
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
    elevation: 40,
    margin: 40,
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
});

export default ModalView;
