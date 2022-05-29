import React from 'react'

function Individual(footballer) {
    return (
        <div>
            <h1>{footballer.name} {" "} plays in {footballer.club} and his position is {footballer.position} and age is {footballer.age}
            </h1>
        </div>
    )
}

export default Individual