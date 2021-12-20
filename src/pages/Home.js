import React from 'react'
import {
    Banner,
    AboutUni,
    HomeFaculty,
    HomeScholarship,
    LateNewsHome
} from '../components';


function Home() {
    return (
        <>
            <Banner />
            <AboutUni />
            <HomeFaculty />
            <HomeScholarship />
            <LateNewsHome />
        </>
    )
}

export default Home
