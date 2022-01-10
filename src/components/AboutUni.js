import React from 'react'
import {Link} from 'react-router-dom';

const AboutUni = () => {
    return (
        <section id="about-university">
            <div className="global-wrapper about-wrapper">
                <div className="left">
                    <iframe style={{pointerEvents: "none"}} src="https://www.youtube.com/embed/wjxBvFr2ZMU?controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <div className="right">
                    <h2>About <font>Our University</font></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis ipsam nemo voluptatum dolores voluptates accusamus ducimus eveniet. Nulla voluptatibus, impedit fugit ad cumque aspernatur, libero culpa, quam ipsam suscipit similique a fugiat. Quasi odit soluta sunt reiciendis eius tempore!</p>
                    <Link to="/" className="btn-learn-about">Learn more</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutUni
