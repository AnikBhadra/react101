import React, { Component } from 'react'
import UpdatingLifecycleMethodB from './UpdatingLifecycleMethodB'

class UpdatingLifecycleMethodA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "anik"
        }
        console.log("UpdatingLifecycleMethodA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("UpdatingLifecycleMethodA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log(" UpdatingLifecycleMethodA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log(" UpdatingLifecycleMethodA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("UpdatingLifecycleMethodA getSnapshotBeforeUpdate ")
        return null
    }

    componentDidUpdate() {
        console.log("UpdatingLifecycleMethodA  componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "anik"
        })
    }

    render() {
        console.log("UpdatingLifecycleMethodA render")
        return (
            <div>
                <div> UpdatingLifecycleMethodA</div>
                <button onClick={this.changeState} >Change state</button>
                <UpdatingLifecycleMethodB />
            </div>

        )
    }
}

export default UpdatingLifecycleMethodA
