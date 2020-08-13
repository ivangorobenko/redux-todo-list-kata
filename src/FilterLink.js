import React, {Component} from "react";
import {Link} from "./Link";
import {connect} from "react-redux";
import {createSetVisibilityFilterAction} from "./actionCreators";

const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter,
    };
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(createSetVisibilityFilterAction(ownProps.filter))
        },
    }
}
export const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);