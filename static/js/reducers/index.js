
const todo = (state = [], action) => {
  console.log('handling action: ' + action.type + " " + action.text);
  return state;
}

export default todo;
