import {FilterLink} from "./FilterLink";
import React from "react";

export class Footer extends React.Component {

    render() {
        return <p>
            Show :
            {' '}
            <FilterLink filter='SHOW_ALL'>All</FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>

        </p>;
    }
}