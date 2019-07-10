import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/increment'

function App() {
    let counter = useSelector(state => state.count);
    let dispatch = useDispatch();
    return (
        <div className="App">
            <h2>Counter: {counter}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default App;
