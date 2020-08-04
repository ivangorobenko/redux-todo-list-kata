import React, {useState} from 'react';
import './App.css';
import {todoAppWithCombinedReducer} from "./todo/todoReducer";
import {createStore} from "redux";
import {AddTodo} from "./AddTodo";
import {TodoList} from "./TodoList";
import * as ReactDOM from "react-dom";

let nextTodoId = 0;

const store = createStore(todoAppWithCombinedReducer);
const toggleTodoOnClick = (id) => {
    store.dispatch({type: 'TOGGLE_TODO', id})
}
const addTodoOnClick = (input) => {
    store.dispatch({type: 'ADD_TODO', text: input, id: nextTodoId++})
}


const App = () => {
    return <div className="App">
        <AddTodo onAddClick={addTodoOnClick}/>
        <TodoList todos={store.getState().todos} todoOnClick={toggleTodoOnClick}/>
    </div>
};

export const render = () => {
    ReactDOM.render(<App/>,
        document.getElementById('root'));
}
store.subscribe(render);
render();

export default App;
