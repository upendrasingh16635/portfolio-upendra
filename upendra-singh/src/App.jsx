import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Page/Navbar'
import Home from "./Page/Home";
import About from "./Page/About";
import Skills from "./Page/Skills";
import Contact from "./Page/Contact";
import Footer from "./Page/Footer";





function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      {/* <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="About"element={<About/>}/>
        <Route path="Service"element={<Service/>}/>
      </Routes> */}
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
