import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import WorkGallery from '../components/WorkGallery';



const Gallery = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="GALLERY." text=""/>
      <WorkGallery/>
      <Footer/>
    </div>
  )
}

export default Gallery
