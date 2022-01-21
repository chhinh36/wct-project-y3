import React from 'react'
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay, Navigation  } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Banner = () => {
    SwiperCore.use([Autoplay, Navigation]);
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            className="slide-home-banner"
        >
            <SwiperSlide className="banner">
                <img src="https://www.hull.ac.uk/assets/section/homepage/images/content/web-full-screen-hull-university-welcome-week-2018-403-cropped-1900x800.x0826ac5b.jpg" alt="University" />
                <div className="banner-info">
                    <div className="title">
                        <h2>Welcome to the</h2>
                        <h2>RUPP</h2>
                        <h2>University</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quisquam velit sunt est ratione fugit nam debitis nesciunt alias hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda porro voluptate temporibus ipsum, accusantium ullam tempora debitis alias corporis.</p>
                    <Link to="/registration" className='btn-banner'>Registration now</Link>
                </div>
            </SwiperSlide>
            
        </Swiper>
    )
}

export default Banner









// const Banner = () => {
//     return (
//         <section id='banner'>
//             <img src="https://www.hull.ac.uk/assets/section/homepage/images/content/web-full-screen-hull-university-welcome-week-2018-403-cropped-1900x800.x0826ac5b.jpg" alt="University" />
//             <div className="banner-info">
//                 <div className="title">
//                     <h2>Welcome to the</h2>
//                     <h2>RUPP</h2>
//                     <h2>Universit</h2>
//                 </div>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quisquam velit sunt est ratione fugit nam debitis nesciunt alias hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda porro voluptate temporibus ipsum, accusantium ullam tempora debitis alias corporis.</p>
//                 <Link to="/university-info" className='btn-banner'>Learn More</Link>
//             </div>
//         </section>
//     )
// }
