import React from 'react'
import {Link} from 'react-router-dom';

const LateNewsHome = () => {
    return (
        <section className="late-news-home">
            <div className="global-wrapper">
                <div className="title">
                    <h2>Latest News</h2>
                    <div className="underline"></div>
                </div>
                <div className="late-news-wrapper">
                    <div className="left">
                        <div className="photo-box">
                            <Link to="/">
                                <img src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/250239498_10159100640181523_6651694377113781692_n.jpg?_nc_cat=105&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UDqzC4vsmkoAX9eI-X-&_nc_ht=scontent.fpnh24-1.fna&oh=00_AT9da_38MAzBGmIQU-6jQMM65v16JR7A_TqHMAzloZPiGw&oe=61BCB7F4" alt="" />
                            </Link>
                        </div>
                        <div className="info">
                            <Link to="/" className='link-info'>
                                <h3>Printing and typesetting industry</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, incidunt? Obcaecati iusto, sint quae quidem ex non exercitationem rerum explicabo quia sit ipsam doloremque commodi laboriosam et voluptatem aspernatur aperiam.</p>
                                <span>Octobor 14th, 2021</span>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <Link to="/" className='link-box'>
                                <img src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/256330252_4540549272666864_5955007597370754543_n.png?_nc_cat=100&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=Ds86uLwhOzAAX8c4zA2&_nc_ht=scontent.fpnh24-1.fna&oh=00_AT_6jVH9FOSm_6AW-VHm0Ga5uURUTNZQXGrVED6_x9MmPA&oe=61BDC868" alt="" />
                                <div className="info">
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</span>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/" className='link-box'>
                                <img src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/257466820_4524841280904330_219556342875431413_n.jpg?_nc_cat=111&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VEFzQlMHqbYAX-ufrlE&tn=CDolLTPYlB9uAbRV&_nc_ht=scontent.fpnh24-1.fna&oh=00_AT8ahBlr5Ee_5b7lv8V60YK0e9cXRuCqx98lhKV9mfYJbg&oe=61BD6470" alt="" />
                                <div className="info">
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</span>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/" className='link-box'>
                                <img src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/247714543_4462078167180642_1406280304443871063_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4txk1a-dj-0AX96Hifv&_nc_ht=scontent.fpnh24-1.fna&oh=00_AT96c6HxOD80y1M2mnvaakvqSKcfj36S8V_UBRSkeIM-wg&oe=61BDAAA9" alt="" />
                                <div className="info">
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</span>
                                </div>
                            </Link>
                        </div>
                        <div className="box-view-more">
                            <Link to="/" className="btn-view-more"><span>View More</span> {'>'}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LateNewsHome
