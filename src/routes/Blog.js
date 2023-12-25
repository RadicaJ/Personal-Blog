import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2'
import Card  from '../components/Card'


const Blog = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Blog." text="welcome to my personal blog"/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Blog
