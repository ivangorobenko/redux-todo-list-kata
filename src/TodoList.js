import {Todo} from "./Todo";
import React from "react";

export const TodoList = ({todos, todoOnClick}) => {
    return <ul>
        {
            todos.map((todo) => (<Todo key={todo.id} {...todo} onClick={() => {
                    todoOnClick(todo.id)
                }}/>)
            )}
    </ul>
}