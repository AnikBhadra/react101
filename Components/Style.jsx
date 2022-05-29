import React from "react";
import "../src/style.css";

function Style({ bg }) {
    const obj = {
        fontSize: "72px",
        color: "blue",
    };

    const val = -1;

    const redGreen = val > 0 ? "green" : val < 0 ? "red" : "";

    return (
        <div>
            <p className={redGreen}>RedGreen</p>
            <p style={obj}>Inline</p>
            <p className="lightcoral big">Regular Class</p>
            <p className={`${bg} underline`}>Expression and class </p>
        </div>
    );
}

export default Style;