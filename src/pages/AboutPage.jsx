import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return <Card>
        <div>
            <h1>About this project</h1>
            <p> This is a React app for leaving feedback</p>
            <p>
                <Link to='/'>Back to main</Link>
            </p>
        </div>

    </Card>

}

export default AboutPage
