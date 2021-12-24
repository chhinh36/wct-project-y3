import React from 'react'
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const OurEvent = () => {
    SwiperCore.use([Autoplay, Navigation]);
    return (
        <section className="our-event">
            <div className="global-wrapper">
                <div className="title">
                    <h2>Our Event</h2>
                </div>
                <Swiper
                    className="slide-wrapper"
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
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
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/">
                            <img src="https://i0.wp.com/phoura-y.com/wp-content/uploads/2020/05/Monash-Uni.jpg?resize=800%2C445&ssl=1" alt="scholarship" />
                        </Link>
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

export default OurEvent
