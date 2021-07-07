import React from 'react'

export default function Todo(props) {
    const { task, dispatch } = props

    return (
        <h1 onClick={() => {dispatch({ type: "TOGGLE_TASK", payload: task})
    }}
            style={{textDecoration: task.completed ? 'line-through' : ''}}
        >
            {task.item}
        </h1>
    )
}