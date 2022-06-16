import React, { Component, Pure } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'anik'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'anik'
            })
        }, 2000)
    }

    render() {
        console.log('*********Parent Comp render************')
        return (
            <div>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
                {/* <MemoComp name={this.state.name} */}

            </div>
        )
    }
}

export default ParentComp