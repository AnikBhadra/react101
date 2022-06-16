import React from 'react'

function MemoCompo({ name }) {
    console.log("rendering memo component")
    return (
        <div>{name}</div>
    )
}

export default React.memo(MemoCompo) 