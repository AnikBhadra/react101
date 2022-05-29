import React, { Component } from "react";

class Greetings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPresent: true,
        };
    }

    render() {
        const check = this.state.isPresent ? (
            <h2>Hello Anik</h2>
        ) : (
            <h2>Hello Guest</h2>
        );

        return <div>{check}</div>;
    }
}

export default Greetings;

