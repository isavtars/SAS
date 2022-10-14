import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../Layout/HeroSection'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/NavBar'

function Home() {
    return (
        <>
          <Navbar/>
            <HeroSection />
            <Cards />
            <Footer/>
        </>
    )
}

export default Home;