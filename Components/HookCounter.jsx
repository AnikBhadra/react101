import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    //  it is called array destructuring
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            {/* setCount is function call so give arrow function  */}
        </div>
    )
}

export default HookCounter