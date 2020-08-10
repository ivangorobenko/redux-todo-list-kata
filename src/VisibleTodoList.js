import React, {Component} from "react";
import {store} from "./App";
import {TodoList} from "./TodoList";

export class VisibleTodoList extends Component {
    componentDidMount = () => {
        this.unsubscribe = store.subscribe(()=>{
            this.forceUpdate();
        });
    };
    componentWillUnmount = () => {
        this.unsubscribe();
    };

   toggleTodoOnClick = (id) => {
        store.dispatch({type: 'TOGGLE_TODO', id})
    }

    getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
        }
    }
    render() {
        const state = store.getState();
        return <TodoList todos={this.getVisibleTodos(state.todos, state.visibilityFilter)}
                         todoOnClick={this.toggleTodoOnClick}/>
    }
}