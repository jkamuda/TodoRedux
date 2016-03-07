import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
    console.log('submit: ' + text);
    this.props.onTodoClick(text);
    this.setState({text: ''});
  },

  onChange(e) {
    this.setState({text: e.target.value});
  },

  render() {
    return (
      <div>
      	Hello world!
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #'}</button>
        </form>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return { todos: state.todos }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (text) => {
      dispatch({
        type: 'ADD_TODO',
        text
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
