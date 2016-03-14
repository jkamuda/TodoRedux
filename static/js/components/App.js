import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const App = React.createClass({
  propTypes: {
    onTodoClick: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      items: [],
      text: ''
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    const {text} = this.state;
    this.props.onTodoClick(text);
    this.setState({text: ''});
  },

  onChange(e) {
    this.setState({text: e.target.value});
  },

  renderList() {
    const {todos} = this.props;
    return todos.map(todo =>
      <li key={todo.id}>{todo.text}</li>
    );
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add Todo'}</button>
        </form>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return { todos: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (text) => {
      dispatch(addTodo(text))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
