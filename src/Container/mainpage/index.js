import React from 'react'
import Header from '../../Compan/header'
import Underheader from '../../Compan/underheader'
import About from '../../Compan/about'
import Paralaxmenu from '../../Compan/paralax'
import Menu from '../../Compan/menu'
import Ourgallery from '../../Compan/ourgallery'
import Gallery from '../../Compan/gallery'
import Reserve from '../../Compan/reserve'
import Reviews from '../../Compan/reviews'
import Footer from '../../Compan/footer'

function Mainpage() {
    

    return(
        <div>
            <Header/>
            <Underheader/>
            <About/>
            <Paralaxmenu/>
            <Menu/>
            <Ourgallery/>
            <Gallery/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default Mainpage