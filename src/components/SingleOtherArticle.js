import React from 'react'
import {Link} from 'react-router-dom';

const SingleOtherArticle = () => {
    return (
        <div className="other-article-news sinlge-box">
            <div className="img-box">
                <Link to="/">
                    <img src="https://wp.quomodosoft.com/newsprk/wp-content/uploads/elementor/thumbs/46-p50lfgcu7my0avocdyunu05fiu3zz41aiwsq8txifs.png" alt="" />
                </Link>
            </div>
            <div className="info">
                <Link to="/">
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, exercitationem.</h5>
                </Link>
                <span>June 08, 2021 - 35 views</span>
            </div>
        </div>
    )
}

export default SingleOtherArticle
