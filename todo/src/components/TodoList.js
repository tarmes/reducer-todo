import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    const { toDoList, dispatch } = props

    const clearCompleted = e => {
        e.preventDefault()
        dispatch({ type: "CLEAR_COMPLETED", payload: toDoList})

    }

    return (
        <div className='todo-list-container'>
            {toDoList.map(task => (
                <Todo task={task} dispatch={dispatch}/>
            ))}
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}