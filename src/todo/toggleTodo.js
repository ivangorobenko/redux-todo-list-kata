export const toggleTodo = (todo) => {
    return {...todo,completed : !todo.completed};
    return Object.assign({},todo,{completed:!todo.completed});
}