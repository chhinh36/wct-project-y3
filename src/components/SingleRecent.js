import React from 'react'
import {MdOutlineDateRange} from 'react-icons/md';

const SingleRecent = () => {
    return (
        <div className="single-box">
            <div className="img-box">
                <img src="" alt="" />
            </div>
            <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae.</p>
                <div className="date">
                    <MdOutlineDateRange className="icon" />
                    <span>June 08, 2021</span>
                </div>
            </div>
        </div>
    )
}

export default SingleRecent
