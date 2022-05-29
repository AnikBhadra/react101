import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const greetParent = () => {
        alert("Clicked");
    };

    return (
        <div>
            <ChildComponent name="Rick" method={greetParent} />
        </div>
    );
}

export default ParentComponent;