import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p> Counter Value - {count} </p>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>

        </div>
    )
}

export default Counter
