export const initialState = [
    {
        item: 'Learn about Reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'start the project',
        completed: false,
        id: 9874654132
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_TASK':
            return [
                ...state, {
                    item: action.payload.item,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_TASK':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                } else {
                        return task
                    }
                }
            )
        case 'CLEAR_COMPLETED':
            return state.filter((task) => !task.completed) 
        default: 
            return state;
    }
}