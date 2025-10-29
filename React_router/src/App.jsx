
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NavBar } from "./Navbar";
import DynamicRoutes from "./components/DynamicRoutes";
import { Project } from "./pages/Project";
import { Developer } from "./components/Developer";
import { Beginer } from "./components/Beginer";
import { Medium } from "./components/Medium";
import { Adavance } from "./components/Advance";


function App() {
  return(
    <div>
      <BrowserRouter>
     
        <NavBar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/developer" element={<Developer/>}>

       
        {/* <Route path="/dynamicRoute/:name" element={<DynamicRoutes/>}/> */}
        
        <Route path="beginer" element={<Beginer/>}/>
        <Route path="medium" element={<Medium/>}/>
        <Route path="advance" element={<Adavance/>}/>
        </Route>



        

      </Routes>  
     
   
      </BrowserRouter>
       
    </div>
  
  )

 }


export default App
