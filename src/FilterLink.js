import React, {Component} from "react";
import {Link} from "./Link";

export class FilterLink extends Component {
    componentDidMount = () => {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    };
    componentWillUnmount = () => {
        this.unsubscribe();
    };

    onFilterClick = (filter, store) => {
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
    }

    render() {
        const props = this.props;
        const {store} = this.context;
        const state = store.getState();
        return (<Link active={state.visibilityFilter === props.filter}
                      onClick={() => {
                          this.onFilterClick(props.filter,store)
                      }}>{props.children}</Link>)
    }
}