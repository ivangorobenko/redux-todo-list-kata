import React, {useState} from 'react';
import './App.css';
import {store} from './count';
import {Counter} from "./Counter";

const increment = () => {
    store.dispatch({type: 'INCREMENT'})
}

const decrement = () => {
    store.dispatch({type: 'DECREMENT'})
}

const App = () => {
    const [number, setNumber] = useState(0);

    const updateCurrentValue = () => {
        setNumber(store.getState());
    };

    store.subscribe(updateCurrentValue);
    return <div className="App">
        <Counter value={number} increment={increment} decrement={decrement}/>
    </div>
};

export default App;
