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
        default: 
            return state;
    }
}