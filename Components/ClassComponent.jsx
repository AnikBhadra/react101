import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div><h1>I like: {this.props.name}</h1></div>
        )
    }
}

export default ClassComponent