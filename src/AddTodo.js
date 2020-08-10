import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {store} from "./App";

let nextTodoId = 0;

export const AddTodo = () => {
    let input

    const addTodoOnClick = (input) => {
        store.dispatch({type: 'ADD_TODO', text: input, id: nextTodoId++})
    }

    return <div>
        <input ref={node => input = node}/>
        <IconButton size={"medium"} onClick={() => {
            addTodoOnClick(input.value);
            input.value = '';
        }}>
            <AddIcon/>
        </IconButton>
    </div>
}