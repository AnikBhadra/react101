import React, { Component } from 'react'

class UpdatingLifecycleMethodB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "anik"
        }
        console.log("UpdatingLifecycleMethodB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("UpdatingLifecycleMethodB getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log(" UpdatingLifecycleMethodB componentDidMount")
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

    render() {
        console.log("UpdatingLifecycleMethodB render")
        return (
            <div>
                UpdatingLifecycleMethodB
            </div>
        )
    }
}

export default UpdatingLifecycleMethodB
