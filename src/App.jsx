import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectList from "./Pages/ProjectList";
import ProjectShowcase from "./Pages/ProjectShowcase";

function App() {
 

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}>
   
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="project-show" element={<ProjectShowcase />} />
        
        </Route>
      </Routes>
   
    </>
  )
}

export default App
