import React from 'react'
import Header from '../../Compan/header'
import About_underheader from '../../Compan/about_underheader'
import Whoweare from '../../Compan/whoweare'
import Testimonials from '../../Compan/testimonials'
import Footer from '../../Compan/footer'

function About() {
    return(
        <div>
            <Header/>
            <About_underheader/>
            <Whoweare/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default About