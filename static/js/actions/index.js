let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    nextTodoId: nextTodoId++,
    text
  };
}

export const markCompleted = (id) => {
  return {
    type: MARK_COMPLETED,
    id
  };
}
