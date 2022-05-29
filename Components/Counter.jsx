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

    const greenRed = count < 0 ? "red" : count > 0 ? "green" : ""


    return (
        <div>
            <div className="container">
                <h1>counter</h1>
                <span className={greenRed} id="value">{count}</span>
                <div>
                    <button id="button1" className="btn decrease" onClick={increase} >INCREASE</button>
                    <button id="button2" className="btn reset" onClick={reset} >RESET</button>
                    <button id="button3" className="btn increase" onClick={decrease} >DECREASE</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
