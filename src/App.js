import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1><code>Todo</code></h1>
        <Todo/>
      </div>
    );
  }
}

export default App;
