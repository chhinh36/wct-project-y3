import React from 'react'
import {Link} from 'react-router-dom';
import {MdOutlineDateRange} from 'react-icons/md';

const SingleRecent = () => {
    return (
        <div className="news-most-recent single-box">
            <div className="img-box">
                <Link to="/">
                    <img src="https://quomodosoft.com/html/newsprk/assets/img/header/widget/tab1.jpg" alt="" />
                </Link>
            </div>
            <div className="info">
                <Link to="/">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae.</p>
                </Link>
                <div className="date">
                    <MdOutlineDateRange className="icon" />
                    <span>June 08, 2021</span>
                </div>
            </div>
        </div>
    )
}

export default SingleRecent
