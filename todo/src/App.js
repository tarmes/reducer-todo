import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>To-Do List</h1>
        <TodoForm />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
