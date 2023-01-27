import React from 'react'
import spinner from '../../assets/loading.gif'

function Spinner() {
    return (
        <img src={spinner} alt='Loading...' style={{
            width: '300px',
            margin: 'auto',
            display: 'block'
        }} />
    )
}

export default Spinner
