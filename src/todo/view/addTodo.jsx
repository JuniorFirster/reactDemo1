import React from 'react';
import { connect } from 'react-redux';
import { todoAdd } from '../action';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="addtodo">
        <input type="text" className="addtodo-input"/>
        <button className="addtodo-submit">添加</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch,) => {
  return {
    addTodoFn: text => {
      dispatch(todoAdd(text));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);