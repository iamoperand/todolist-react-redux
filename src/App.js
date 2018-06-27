import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={TodoList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
