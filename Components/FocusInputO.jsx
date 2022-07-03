import React, { useEffect, useRef } from 'react'

function FocusInputO() {

    const inputRef = useRef(null)

    useEffect(() => {
        // focus the input element using useRef hook
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInputO