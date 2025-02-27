import React from 'react'
import Navbar from '../comps/navbar'
import "../styling/nf.css"
import not from '../images/5203299.jpg'
const Notfound = () => {
  return (
    <>
    <Navbar/>   
    <img src={not} alt="404" className="nf"/>
    
    </>
  )
}

export default Notfound