import React from 'react'
import mainLogo from '../images/Group 77.png'
export default function Main(){
    return (
        <section className='main--section'>
            <div className='main-img-section'>
            <img src={mainLogo} alt=""  className='main--img'/>
            </div>
            <div className='main-text'>
            <h1 className='main--bold'>Online Experiences</h1>
            <p className='main--light'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}