import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todos';

function AddTodosScreen(props) {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [importance, setImportance] = useState('1');

  const onSubmit = () => {
    const dateTime = new Date(date);
    dateTime.setHours(time.getHours());
    dateTime.setMinutes(time.getMinutes());

    props.addTodo({
      id: Date.now(),
      name,
      date: dateTime,
      importance,
    });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Todo Name"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || date;
          setDate(currentDate);
        }}
      />
      <DateTimePicker
        value={time}
        mode="time"
        display="default"
        onChange={(event, selectedTime) => {
          const currentTime = selectedTime || time;
          setTime(currentTime);
        }}
      />
      <Picker
        selectedValue={importance}
        onValueChange={(itemValue) => setImportance(itemValue)}
      >
        <Picker.Item label="Big task" value="1" />
        <Picker.Item label="Medium task" value="2" />
        <Picker.Item label="Small task" value="3" />
      </Picker>
      <Button title="Add" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodosScreen);
