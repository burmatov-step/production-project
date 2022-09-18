import React, { useState } from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0);
    const onClick = () =>{
        setCount(count + 1)
    }
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <div>
            <button onClick={onClick}>increment</button>
            </div>
        </div>
    );
};

export default Counter;