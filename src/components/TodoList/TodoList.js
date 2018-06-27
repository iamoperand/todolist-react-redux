import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    todoInput: '',
  }

  onInputChangeHandler = (e) => {
    this.setState({
      todoInput: e.target.value,
    })
  }

  onAddHandler = () => {
    this.props.addTodo(this.state.todoInput);
    this.setState({
      todoInput: '',
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo) => (
              <li key={todo.id}>{todo.name}</li>
            ))
          }
        </ul>

        <div>
          <input type="text" value={this.state.todoInput} onChange={this.onInputChangeHandler} />
          <input type="button" onClick={this.onAddHandler} value="Add" />
        </div>
      </div>
    )
  }
}

export default TodoList;

