const initialState = [{
    id: 1,
    text: '#1 Todo Text',
    completed: false,
}, {
    id: 2,
    text: '#2 Todo Text',
    completed: false,
},{
    id: 3,
    text: '#3 Todo Text',
    completed: false,
},{
    id: 4,
    text: '#4 Todo Text',
    completed: false,
}, {
    id: 5,
    text: '#2 Todo Text',
    completed: false,
},{
    id: 6,
    text: '#3 Todo Text',
    completed: false,
},{
    id: 7,
    text: '#4 Todo Text',
    completed: false,
}, {
    id: 8,
    text: '#2 Todo Text',
    completed: false,
},{
    id: 9,
    text: '#3 Todo Text',
    completed: false,
},{
    id: 10,
    text: '#4 Todo Text',
    completed: false,
}, {
    id: 11,
    text: '#2 Todo Text',
    completed: false,
},{
    id: 12,
    text: '#3 Todo Text',
    completed: false,
},{
    id: 13,
    text: '#4 Todo Text',
    completed: false,
}, {
    id: 14,
    text: '#2 Todo Text',
    completed: false,
},{
    id: 15,
    text: '#3 Todo Text',
    completed: false,
},{
    id: 16,
    text: '#4 Todo Text',
    completed: false,
}, {
    id: 17,
    text: '#2 Todo Text',
    completed: false,
},{
    id: 18,
    text: '#3 Todo Text',
    completed: false,
},{
    id: 19,
    text: '#4 Todo Text',
    completed: false,
}];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo,
            );
        default:
            return state;
    }
};

export default todos