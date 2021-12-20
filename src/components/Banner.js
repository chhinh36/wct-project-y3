import React from 'react'
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <section id='banner'>
            <img src="https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg" alt="University" />
            <div className="banner-info">
                <div className="title">
                    <h2>Welcome to the</h2>
                    <h2>RUPP</h2>
                    <h2>Universit</h2>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quisquam velit sunt est ratione fugit nam debitis nesciunt alias hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda porro voluptate temporibus ipsum, accusantium ullam tempora debitis alias corporis.</p>
                <Link to="/" className='btn-banner'>Learn More</Link>
            </div>
        </section>
    )
}

export default Banner
