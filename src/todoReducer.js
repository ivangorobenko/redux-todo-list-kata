import {combineReducers, createStore} from "redux";

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {id: action.id, text: action.text, completed: false};
        case 'TOGGLE_TODO':
            if (state.id !== action.id) return state;
            return {
                ...state, completed: !state.completed
            }
        default :
            return state;
    }

};

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)]
        case 'TOGGLE_TODO':
            return state.map(t => {
                return todo(t, action);
            })
        default :
            return state;
    }
}

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default :
            return state;
    }
}

export const todoAppWithCombinedReducer = combineReducers({todos, visibilityFilter});

const combinedReducersRecoded = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {})
    };
};

const todoAppWithCombinedReducerRecoded = combinedReducersRecoded({todos, visibilityFilter});


export const runTodoReducer = () => {
    const store = createStore(todoAppWithCombinedReducerRecoded);
    store.dispatch({type: "ADD_TODO", id: 0, text: "Bla"});
    store.dispatch({type: "SET_VISIBILITY_FILTER", filter: "SHOW_COMPLETED"});
    console.log(store.getState());
}

