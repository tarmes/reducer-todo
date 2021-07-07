import React, { useState } from 'react'

const initialNewTask = {
    item: '',
    completed: false,
    id: ''
}

export default function TodoForm(props) {

    const { dispatch } = props

    const[newTask, setNewTask] = useState(initialNewTask)
    // const[taskList, setTaskList] = useState(initialValues)
    const handleChanges = e => {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }

    const addTask = e => {
        e.preventDefault()
        dispatch({ type: "ADD_NEW_TASK", payload: newTask})
        setNewTask(initialNewTask)
    }

    return(
        <form onSubmit={addTask}>
            <input 
                type='text'
                value={newTask.item}
                name='item'
                onChange={handleChanges}
            />
            <button>Add Task</button>
        </form>
    )
}