import React from 'react'

function Library(props) {
    const name = props.n;
    return (
        <div>
            <h1>My name is {props.n}</h1>
        </div>
    )
}

export default Library