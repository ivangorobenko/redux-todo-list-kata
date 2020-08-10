import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {todoAppWithCombinedReducer} from "./todoReducer";
import {createStore} from "redux";
import {AddTodo} from "./AddTodo";
import * as ReactDOM from "react-dom";
import {Footer} from "./Footer";
import {VisibleTodoList} from "./VisibleTodoList";
import {Provider} from "./Provider";
import {FilterLink} from "./FilterLink";

AddTodo.contextTypes = {
    store: PropTypes.object
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
}

FilterLink.contextTypes = {
    store: PropTypes.object
}
const App = () => {
    return <div className="App">
        <AddTodo/>
        <VisibleTodoList />
        <Footer/>
    </div>
};

Provider.childContextTypes = {
    store: PropTypes.object
};


ReactDOM.render(<Provider store={createStore(todoAppWithCombinedReducer)}><App/></Provider>,
    document.getElementById('root'));


export default App;
