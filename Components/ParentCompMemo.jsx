import React, { Component } from 'react'
import MemoCompo from './MemoCompo'


class ParentCompMemo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'anik'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "anik"
            })
        }, 2000)
    }

    render() {
        console.log('*********Parent Comp render************')
        return (

            <div>
                Parent Component
                <MemoCompo name={this.state.name} />
            </div>
        )
    }
}

export default ParentCompMemo