import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchingData_useEffect_1() {
    const [posts, setPostes] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)

                setPostes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchingData_useEffect_1