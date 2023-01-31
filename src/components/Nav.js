import React from 'react'
import navLogo from "../images/airbnb 1.png"
export default function Nav(){
    return (
        <nav className='nav'>
          <img src={navLogo} alt="" className='nav--logo'/>
        </nav>
     
    )
}