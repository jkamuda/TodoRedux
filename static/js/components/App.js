import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, markCompleted } from '../actions/index';

const App = React.createClass({
  propTypes: {
    onTodoClick: PropTypes.func.isRequired,
    onMarkCompleted: PropTypes.func.isRequired
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
    const {onTodoClick} = this.props;

    if (!text) {
      return;
    }

    onTodoClick(text);
    this.setState({text: ''});
  },

  onChange(e) {
    this.setState({text: e.target.value});
  },

  onMarkCompleted(e) {
    console.log('completed ' + e);
    const {onMarkCompleted} = this.props;
    onMarkCompleted(2);
  },

  renderTodoList() {
    const {todos} = this.props;
    return todos.map(todo =>
      <li key={todo.id}>
        {todo.text}
        &nbsp;
        <button onClick={this.onMarkCompleted}>
          Mark completed
        </button>
      </li>
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
          {this.renderTodoList()}
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
    },
    onMarkCompleted: (id) => {
      dispatch(markCompleted(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
