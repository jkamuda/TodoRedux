import React from 'react';

export default React.createClass({

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
