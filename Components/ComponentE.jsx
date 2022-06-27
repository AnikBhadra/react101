import React, { Component, useContext } from 'react'
import { UserContext, ChannelContext } from '../src/App'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE