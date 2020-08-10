import React from 'react';
import './App.css';
import {todoAppWithCombinedReducer} from "./todoReducer";
import {createStore} from "redux";
import {AddTodo} from "./AddTodo";
import {TodoList} from "./TodoList";
import * as ReactDOM from "react-dom";
import {Footer} from "./Footer";
import {VisibleTodoList} from "./VisibleTodoList";

export const store = createStore(todoAppWithCombinedReducer);

const App = () => {
    return <div className="App">
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
};

ReactDOM.render(<App/>,
    document.getElementById('root'));


export default App;
