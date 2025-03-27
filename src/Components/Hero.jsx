import React from 'react'
import Navbar from './Navbar'
import bgVideo from '/bg-video/bg-video.mp4'
import LoaderHomePage from './LoaderHomePage'
import BookCall from './BookCall'


const Hero = () => {
  return (
    <div className='h-screen relative border-box'>
      <Navbar/>
    <LoaderHomePage/>
    <BookCall/>
           
    </div>
  )
}

export default Hero