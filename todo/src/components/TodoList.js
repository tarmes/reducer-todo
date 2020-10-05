import React from 'react'

export default function TodoList(props) {
    const { toDoList } = props

    return (
        <div className='todo-list-container'>
            {toDoList.map(task => (
                <h1>{task.item}</h1>
            ))}
        </div>
    )
}