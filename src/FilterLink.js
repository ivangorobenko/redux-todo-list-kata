import React, {Component} from "react";
import {Link} from "./Link";
import {store} from "./App";

export class FilterLink extends Component {
    componentDidMount = () => {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    };
    componentWillUnmount = () => {
        this.unsubscribe();
    };

    onFilterClick = (filter) => {
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
    }

    render() {
        const props = this.props;
        const state = store.getState();
        return (<Link active={state.visibilityFilter === props.filter}
                      onClick={() => {
                          this.onFilterClick(props.filter)
                      }}>{props.children}</Link>)
    }
}