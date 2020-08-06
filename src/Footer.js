import {FilterLink} from "./FilterLink";
import React from "react";

export const Footer = ({onClick,visibilityFilter}) =>
    <p>
        Show :
        {' '}
        <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}
                    onClick={onClick}>All</FilterLink>
        {' '}
        <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}
                    onClick={onClick}>Active</FilterLink>
        {' '}
        <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}
                    onClick={onClick}>Completed</FilterLink>

    </p>