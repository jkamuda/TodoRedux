import { ADD_TODO, MARK_COMPLETED } from '../actions/index';

let nextTodoId = 0;

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        id: nextTodoId++,
        completed: false
      }
    case MARK_COMPLETED:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: true
      }
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case MARK_COMPLETED:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export default todos;
