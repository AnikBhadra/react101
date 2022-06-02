import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ fastName: '', lastName: '' })
    return (
        <form>
            <div>
                <input
                    type="text"
                    value={name.fastName}
                    onChange={e => setName({ ...name, fastName: e.target.value })} />

                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />

                <h2>Your fast name is - {name.fastName}</h2>
                <h2>Your lastName is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </div>
        </form>

    )
}

export default HookCounterThree