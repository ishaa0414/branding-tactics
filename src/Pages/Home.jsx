import React from 'react'
import Navbar from '../Components/Navbar'
import LoaderHomePage from '../Components/LoaderHomePage'
import BookCall from '../Components/BookCall'
import BuildingBrandGrid from '../Components/BuildingBrandGrid'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <LoaderHomePage/>
      <BookCall/>
      <BuildingBrandGrid/>
    </div>
    
  )
}

export default Home