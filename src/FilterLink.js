import React, {Component} from "react";
import {Link} from "./Link";
import {connect} from "react-redux";

const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter,
    };
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (id) => {
            dispatch({type: 'TOGGLE_TODO', id})
        },
    }
}
export const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);