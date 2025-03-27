import React from "react";
import Problems from "./Problems";
import bgVideo from '/bg-video/bg-video.mp4'

const clientLogos = [
  "/client logo/logo1.png",
  "/client logo/logo2.jpg",
  "/client logo/logo3.png",
  "/client logo/logo4.png",
  "/client logo/logo5.png",
  "/client logo/logo6.png",
  "/client logo/logo7.png",
  "/client logo/logo8.png",
  "/client logo/logo9.png",
  "/client logo/logo10.png",
  "/client logo/logo11.jpeg",
  "/client logo/logo12.png",
  "/client logo/logo13.png",
  "/client logo/logo14.png",
  "/client logo/logo15.png",
  "/client logo/logo16.webp",
  "/client logo/logo17.png",
  "/client logo/logo18.png",
  "/client logo/logo19.png",
  "/client logo/logo20.png",
];

const VisionaryBrand = () => {
  return (
    <>
      {/* Hero Section with Background Video */}
      <div className="relative h-screen w-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex justify-between text-white p-4">
            <div>Branding Tactics</div>
            <div>
              <button>Case Study</button>
            </div>
          </div>
          
          {/* You can add more hero section content here */}
          <div className="flex-grow flex items-center justify-center">
            {/* Hero main content can go here */}
          </div>
        </div>
      </div>

      {/* Trusted By Visionary Brands Section */}
      <div className="flex flex-col justify-center items-center  bg-[#121212]">
        <div className="flex flex-col">
          <div className="flex justify-center items-center  mt-5">
            <p className="text-2xl text-[#AAAAAA] mr-2">Trusted By</p>
            <p className="text-3xl text-white">Visionary Brands</p>
          </div>

          <div className="logo-slider">
            <div className="logo-track">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="logo" 
                />
              ))}
            </div>
          </div>

          <div className="mx-auto flex h-30 w-screen items-center justify-center cursor-pointer">
            <button 
              type="button" 
              className="cursor-pointer transition group flex h-10 w-56 items-center justify-center rounded-full bg-gradient-to-r from-[#0DF5D0] to-[#08EE86] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-3xl hover:shadow-[#0DF5D0]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                Let's work together
              </div>
            </button>
          </div>
        </div>
      </div>

      <Problems/>
      
    </>
  );
};

export default VisionaryBrand;