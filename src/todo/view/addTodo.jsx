/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as action from '../action';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  getRefInput = element => {
    this.input = element;
  }

  addSubmit = (ev) => {
    ev.preventDefault();
    const input = this.input;
    if (!input.value.trim()) return;
    const text = input.value;
    this.props.addTodoFn(text);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addSubmit} className="addtodo">
        <input
          type="text"
          ref={this.getRefInput}
          className="addtodo-input"
        />
        <button className="addtodo-submit">添加</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch,) => {
  return {
    addTodoFn: text => {
      dispatch(action.todoAdd(text));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);