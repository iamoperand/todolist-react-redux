import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions';

import TodoList from './TodoList';

const mapStateToProps = state => ({
  todos: state.todoList,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);