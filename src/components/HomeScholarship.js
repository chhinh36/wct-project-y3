import React from 'react'
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay, Navigation  } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const HomeScholarship = () => {
    SwiperCore.use([Autoplay, Navigation]);
    return (
        <section className="scholarship en-font">
            <div className="global-wrapper">
                <div className="title">
                    <h2>Our Scholarship</h2>
                    <div className="underline"></div>
                </div>
                <Swiper
                    className="slide-wrapper"
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        768:{
                            slidesPerView: 2
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                >
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                        <div className="info">
                            <Link to="/" className="link-info">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem.</h3>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                        <div className="info">
                            <Link to="/" className="link-info">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem.</h3>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                        <div className="info">
                            <Link to="/" className="link-info">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem.</h3>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                        <div className="info">
                            <Link to="/" className="link-info">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem.</h3>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                        <div className="info">
                            <Link to="/" className="link-info">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem.</h3>
                            </Link>
                        </div>
                    </SwiperSlide>
                    

                </Swiper>
            </div>
        </section>
    )
}

export default HomeScholarship
