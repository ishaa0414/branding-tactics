// import ReactDOM from "react-dom/client";
// import {  Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import ProjectList from "./Pages/ProjectList";
// import ProjectShowcase from "./Pages/ProjectShowcase";
// import Navbar from "./Components/Navbar";

// function App() {
 

//   return (
//     <>
    
//       <Routes>
//         <Route path="/" element={<Home/>}>
//           {/* <Navbar/> */}
//           <Route path="/project-list" element={<ProjectList />} />
//           <Route path="project-show" element={<ProjectShowcase />} />
        
//         </Route>
//       </Routes>
   
//     </>
//   )
// }

// export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CaseStudy from './Pages/CaseStudy'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <div className=" border-box bg-[#121212]">


      <Routes>
        <Route path="/" element={<Home/>}>
          {/* <Navbar/> */}
          {/* <Route path="/project-list" element={<ProjectList />} /> */}
          <Route path="project-show" element={<ProjectShowcase />} />  
        </Route>
      </Routes>   
      </div>
    </>
  )
}

export default App