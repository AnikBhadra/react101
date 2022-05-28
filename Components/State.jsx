import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "anik",
            lname: "bhadra",
            age: 25
        };
    }
    render() {

        return (
            <div> My name is {this.state.fname}
                {" "}{this.state.lname} and my age is {" "}
                {this.state.age}
            </div>

        )
    }
}

export default State