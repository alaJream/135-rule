const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'MOVE_TODO':
      // moving the todo here
      return state;
    default:
      return state;
  }
}
