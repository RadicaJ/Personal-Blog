import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'
import Work2 from '../components/Work2'
import Work3 from '../components/Work3'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="FAVORITES." text="creators's picks"/>
      <Work/> 
      <Work2/> 
      <Work3/> 
      <Footer/>
    </div>
  )
}

export default Project;

