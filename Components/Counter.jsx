import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    // increase = () => {
    //   this.state.count++;
    // };

    increase = () => {
        this.setState(
            {
                count: this.state.count + 1,
            },
            () => {
                console.log(this.state.count + " synchronous");
            }
        );

        console.log(this.state.count + " asynchronous");
    };

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default Counter;