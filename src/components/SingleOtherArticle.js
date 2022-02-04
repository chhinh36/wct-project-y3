import React from 'react'
import {Link} from 'react-router-dom';

const SingleOtherArticle = () => {
    return (
        <div className="other-article-news sinlge-box">
            <div className="img-box">
                <Link to="/">
                    <img src="https://eonreality.com/wp-content/uploads/2020/11/ALC_AR_VR_XR.jpg" alt="" />
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
