import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { deleteTodo } from './redux/actions/todos';  

function TodoItem({ item, deleteTodo }) {
  const [completed, setCompleted] = React.useState(false);

  const onComplete = () => {
    setCompleted(!completed);
  };

  const deleteTodoItem = () => {
    deleteTodo(item.id);
  };

  return (
    <View style={[styles.todo, item.importance === '1' ? styles.bigTask : item.importance === '2' ? styles.mediumTask : styles.smallTask]}>
      <Text style={completed ? styles.completed : null}>{item.name}</Text>
      <Text>{item.date.toLocaleTimeString()}</Text> 
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onComplete}>
          <Icon name={completed ? 'check-square' : 'square'} type='feather' />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodoItem}>
          <Icon name='delete' type='material' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function WelcomeScreen(props) {
  const { todos, deleteTodo } = props;

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to midnight

  const todaysTodos = todos.filter(
    (todo) => new Date(todo.date).setHours(0, 0, 0, 0) === today.getTime()
  );

  const renderItem = ({ item }) => <TodoItem item={item} deleteTodo={deleteTodo} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <FlatList
        data={todaysTodos}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  bigTask: {
    backgroundColor: 'red',
  },
  mediumTask: {
    backgroundColor: 'yellow',
  },
  smallTask: {
    backgroundColor: 'green',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
