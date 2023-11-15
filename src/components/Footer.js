import React from 'react'
import insta from '../assets/insta-logo.png'
import tw from '../assets/twitter.png'
import fb from '../assets/fb-logo.png'
import { ReactDOM } from 'react'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div className='footer'> 
    
     <div className='footer2'>
        <Link to='/'><p ><img src={tw}></img></p></Link>
        <Link to='/'><p ><img src={fb}></img></p></Link>
        <Link to='https://www.instagram.com/7thstreetburgernyc/?hl=tr'><p ><img src={insta}></img></p></Link>

        </div>
    
    
    
    </div>
  )
}

export default Footer