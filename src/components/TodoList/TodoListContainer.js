import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions';

import TodoList from './TodoList';

const mapStateToProps = state => ({
  todos: state.todoListReducer,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);