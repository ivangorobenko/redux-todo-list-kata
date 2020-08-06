import React, {Component} from "react";
import {Link} from "./Link";
import {store} from "./App";

export class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(()=>{
           this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();
        return (<Link active={state.visibilityFilter === props.filter}
                      onClick={() => {
                          store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: props.filter});
                      }}>{props.children}</Link>)
    }
}