import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    const { toDoList, dispatch } = props

    return (
        <div className='todo-list-container'>
            {toDoList.map(task => (
                <Todo task={task} dispatch={dispatch}/>
            ))}
        </div>
    )
}