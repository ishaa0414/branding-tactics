import React from 'react'
import Navbar from '../Components/Navbar'
import LoaderHomePage from '../Components/LoaderHomePage'
import BookCall from '../Components/BookCall'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <LoaderHomePage/>
      <BookCall/>
    </div>
    
  )
}

export default Home