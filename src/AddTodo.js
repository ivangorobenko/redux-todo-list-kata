import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {connect} from "react-redux";
import {createAddTodoAction} from "./actionCreators";

export let AddTodo = ({dispatch}) => {
    let input

    return <div>
        <input ref={node => input = node}/>
        <IconButton size={"medium"} onClick={() => {
            dispatch(createAddTodoAction(input.value))
            input.value = '';
        }}>
            <AddIcon/>
        </IconButton>
    </div>
};

AddTodo = connect()(AddTodo);
