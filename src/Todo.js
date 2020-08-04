import React from "react";

export const Todo = ({completed, text, onClick}) => {
    return <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
}