import React, { Component } from 'react';

import './App.css';

import TodoList from './components/TodoList';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ben's Todo List</h1>
        </header>
        <TodoList />
        <Todos />
      </div>
    );
  }
}

export default App;
