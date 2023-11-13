import React from 'react'
import { Link } from 'react-router-dom'
import bImage from '../assets/12.avif'


function Home() {
  return (
    <div className='home'style={{backgroundImage:`url(${bImage})`}} >
    <div className='headerContainer'>
      <h1>7 Street Burger</h1>
      <p>the most famous hamburger is here...</p>
    <Link to="/menu"> <button>Order Now</button></Link>
      </div> 
     
    </div>
  )
}

export default Home