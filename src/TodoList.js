import {Todo} from "./Todo";
import React from "react";

export const TodoList = ({todos, onTodoClick}) => {
    return <ul>
        {
            todos.map((todo) => (<Todo key={todo.id} {...todo} onClick={() => {
                    onTodoClick(todo.id)
                }}/>)
            )}
    </ul>
}