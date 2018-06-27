import { combineReducers } from 'redux';

const todoListReducer = (state = [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        }
      ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todoList: todoListReducer,
})

export default rootReducer;