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
            className="slide-home-banner en-font"
        >
            <SwiperSlide className="banner">
                <img src="https://www.hull.ac.uk/assets/section/homepage/images/content/web-full-screen-hull-university-welcome-week-2018-403-cropped-1900x800.x0826ac5b.jpg" alt="University" />
                <div className="banner-info">
                    <div className='academic-warpper'>
                        <div className="new-academic">
                            <h2>New academic year 2021 - 2022 is</h2>
                            <h2>opening now!</h2>
                            
                        </div>
                        <h4> ratione fugit nam debitis nesciunt alias hic. Lorem ipsum dolor</h4>
                        <Link to="/formregistration" className='btn-banner'>Apply now</Link>
                    </div>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide className="banner">
                <img src="https://dcfwfuaf91uza.cloudfront.net/online/wp-content/uploads/Liberty-University-Admissions-scaled.jpg" alt="University" />
                <div className="banner-info">

                    <div className="title">
                        <h2>Welcome to</h2>
                        <h2>RUPP University</h2>
                    </div>
                    <p>jjadipisicing elit. Cum assumenda porro voluptate temporibus ipsum, accusantium ullam tempora debitis alias corporis.</p>
                    <Link to="/formregistration" className='btn-banner'>Register now</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="banner">
            <div className='banner-info'>
                <div className='covid-news'>
                    <img src="https://www.forteinsurance.com/Assets/Covid19/banner.png" alt="University" />
                </div>
                    
                
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
