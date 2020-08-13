import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {connect} from "react-redux";


let nextTodoId = 0;


export let AddTodo = ({dispatch}) => {
    let input

    return <div>
        <input ref={node => input = node}/>
        <IconButton size={"medium"} onClick={() => {
            dispatch({type: 'ADD_TODO', text: input.value, id: nextTodoId++})
            input.value = '';
        }}>
            <AddIcon/>
        </IconButton>
    </div>
};

AddTodo = connect()(AddTodo);
