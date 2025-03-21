import React from 'react'
import logo from '../assets/icon.png'
const Navbar = () => {
  return (
    <div className="w-full h-24 bg-black shadow-md">
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8  rounded-full">
          <img 
              src={logo} 
              alt="Branding Tactics Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="font-bold text-lg text-white">
            Branding Tactics  
          </div>
        </div>
        <div className="text-sm font-medium text-white border-2 border-orange-500 rounded-full px-4 py-1">
          Case Study
        </div>
      </div>
    </div>
  )
}

export default Navbar