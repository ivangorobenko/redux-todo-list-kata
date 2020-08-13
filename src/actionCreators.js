let nextTodoId = 0;

export const createAddTodoAction = text => ({type: 'ADD_TODO', text, id: nextTodoId++});

export const createSetVisibilityFilterAction = filter => ({type: 'SET_VISIBILITY_FILTER', filter});

export const createToggleTodoAction = id => ({type: 'TOGGLE_TODO', id});
