import React from "react";

function ChildComponent({ name, method }) {
    return (
        <div>
            <button onClick={method}>Click Me {name}</button>
        </div>
    );
}

export default ChildComponent;