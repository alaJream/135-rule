import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { deleteTodo, moveTodo } from './redux/actions/todos'; 

function AllTodosScreen(props) {
  const { todos, deleteTodo, moveTodo } = props;

  const moveToWelcomeScreen = (todo) => {
    moveTodo(todo.id);
  };

  const deleteTodoItem = (todo) => {
    deleteTodo(todo.id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.todo}>
      <Text>{item.name}</Text>
      <Text>{item.date.toLocaleTimeString()}</Text> 
      <Text>{item.date.toLocaleDateString()}</Text> 
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => moveToWelcomeScreen(item)}>
          <Icon name="swap-horiz" type="material" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodoItem(item)}>
          <Icon name="delete" type="material" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  moveTodo: (id) => dispatch(moveTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTodosScreen);
