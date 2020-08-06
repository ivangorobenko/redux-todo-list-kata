import React from 'react';
import './App.css';
import {todoAppWithCombinedReducer} from "./todoReducer";
import {createStore} from "redux";
import {AddTodo} from "./AddTodo";
import {TodoList} from "./TodoList";
import * as ReactDOM from "react-dom";
import {Footer} from "./Footer";

let nextTodoId = 0;

export const store = createStore(todoAppWithCombinedReducer);

const toggleTodoOnClick = (id) => {
    store.dispatch({type: 'TOGGLE_TODO', id})
}
const addTodoOnClick = (input) => {
    store.dispatch({type: 'ADD_TODO', text: input, id: nextTodoId++})
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
}
const onFilterClick = (filter) => {
    store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
}

const App = ({todos, visibilityFilter}) => {
    return <div className="App">
        <AddTodo onAddClick={addTodoOnClick}/>
        <TodoList todos={getVisibleTodos(todos, visibilityFilter)}
                  todoOnClick={toggleTodoOnClick}/>
        <Footer/>
    </div>
};

export const render = () => {
    ReactDOM.render(<App {...store.getState()}/>,
        document.getElementById('root'));
}
store.subscribe(render);
render();

export default App;
