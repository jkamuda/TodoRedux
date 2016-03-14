
const todo = (state = [], action) => {
  console.log('handling action: ' + action.type + " " + action.text);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
}

export default todo;
