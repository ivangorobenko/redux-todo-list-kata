import React from 'react';
import './App.css';
import {todoAppWithCombinedReducer} from "./todoReducer";
import {createStore} from "redux";
import {AddTodo} from "./AddTodo";
import * as ReactDOM from "react-dom";
import {Footer} from "./Footer";
import {VisibleTodoList} from "./VisibleTodoList";

const App = ({store}) => {
    return <div className="App">
        <AddTodo store={store}/>
        <VisibleTodoList store={store}/>
        <Footer store={store}/>
    </div>
};

ReactDOM.render(<App store={createStore(todoAppWithCombinedReducer)}/>,
    document.getElementById('root'));


export default App;
