import { TODO_ADD, TODO_TOGGLE, TODO_REMOVE } from './actionTypes';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        {
          completed: false,
          text: action.text,
          id: action.id,
        },
        ...state,
      ];
    case TODO_TOGGLE:
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, completed: !item.completed};
        } else {
          return item;
        }
      })
    case TODO_REMOVE:
      return state.filter(item => (item.id !== action.id));
    default:
      return state;
  }
}

export default todoReducer;