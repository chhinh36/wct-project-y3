import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <section className='en-font' id="error-page">
            <div className="not-found">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>
            <p>Page Not Found!</p>
            <Link to="/" className="btn-not-found">Back To Homepage</Link>
        </section>
    )
}

export default Error
