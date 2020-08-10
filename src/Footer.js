import {FilterLink} from "./FilterLink";
import React from "react";

export const Footer = ({store}) =>
    <p>
        Show :
        {' '}
        <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
        {' '}
        <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
        {' '}
        <FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>

    </p>