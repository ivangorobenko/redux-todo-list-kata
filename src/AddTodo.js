import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import React from "react";

export const AddTodo = ({onAddClick}) => {
    let input
    return <div>
        <input ref={node => input = node}/>
        <IconButton size={"medium"} onClick={() => {
            onAddClick(input.value);
            input.value = '';
        }}>
            <AddIcon/>
        </IconButton>
    </div>
}