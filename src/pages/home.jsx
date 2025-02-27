import React from 'react'
import Navbar from '../comps/navbar'
import Mainc from '../comps/mainc'
import Inc from '../comps/inc'
import About from '../comps/about'
import Pri from '../comps/pri'
import Gallery from '../comps/gallery'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Mainc/>
    <About/>
    <Pri/>
    <div>
      <h1 style={{color:"black"}}>Excited to be a part of us .watch out the events here</h1>
      <div style={{ 
  display: "flex", 
  justifyContent: "center",  // Centers horizontally
  alignItems: "center",  // Centers vertically

  width: "100%",  // Full width to allow centering
}}>
  <NavLink 
    to="/events" 
    style={{ 
      display: "inline-flex",
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "red", 
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "bold",
      width: "fit-content",
      paddingTop: "15px",
      paddingBottom: "15px",
      marginTop: "20px",
    }}
  >
    Events
  </NavLink>
</div>


    </div>
    <Inc/>
    
    <Gallery/>
    
    </>
  )
}

export default Home