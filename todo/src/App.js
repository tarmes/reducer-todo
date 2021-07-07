import React, {useReducer} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import { initialState, todoReducer } from './reducers';

function App() {
  const [toDoList, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <div className='header'>
        <h1>To-Do List</h1>
        <TodoForm dispatch={dispatch}/>
      </div>
      <TodoList toDoList={toDoList} dispatch={dispatch}/>
    </div>
  );
}

export default App;
