// redux/actions/todos.js
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  
  export const moveTodo = (id) => ({
    type: 'MOVE_TODO',
    payload: id,
  });
  