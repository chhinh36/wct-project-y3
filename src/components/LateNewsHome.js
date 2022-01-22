import React from 'react'
import {Link} from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';


const LateNewsHome = () => {
    return (
        <section className="late-news-home en-font">
            <div className="global-wrapper">
                <div className="title">
                    <h2>News</h2>
                    <div className="underline"></div>
                </div>
                <div className="late-news-wrapper">
                    <div className="left">
                        <h3>recent news</h3>
                        <div className="photo-box">
                            
                            <Link to="/news/1">
                                <img src="https://www.vital.com.kh/wp-content/uploads/2020/10/120814898_2760672490816921_1944186427226243318_o-1024x683.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="info">
                            <Link to="/news/1" className='link-info'>
                                <h3>vital sponsoring for robot competition 2020 - vital premium water</h3>
    
                                <span>Octobor 14th, 2021</span>
                            </Link>
                        </div>
                    </div>

                    <div className="right">
                        <Link to="/news">
                            <div className='box'>
                                
                                    <h3 className='view-more'>
                                        <span className='view-all-news'>explore more news</span>
                                        <AiOutlineArrowRight className='arrow'/>
                                    </h3>
                                    
                               
                            </div>
                        </Link>
                        
                        <div className="box">
                            <Link to="/news/1" className='link-box'>
                                
                                <div className="info">
                                    <h3>vital sponsoring for robot competition 2020 - vital premium water</h3>
                                    <span>7th December, 2021</span>
                                    <div className="news-underline"></div>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/news/1" className='link-box'>
                                
                                <div className="info">
                                    <h3>vital sponsoring for robot competition 2020 - vital premium water</h3>
                                    <span>7th December, 2021</span>
                                    <div className="news-underline"></div>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/news/1" className='link-box'>
                                
                                <div className="info">
                                    <h3>vital sponsoring for robot competition 2020 - vital premium water</h3>
                                    <span>7th December, 2021</span>
                                    <div className="news-underline"></div>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LateNewsHome
