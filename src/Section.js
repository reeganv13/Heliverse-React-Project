import React from 'react'
import './Header.css'
const Section = () => {
  return (
    <div className='section'>
        <h1 className='section-heading'>Apply On Any Section Or Enable For Whole Page</h1>
        <div className='section-boxes'>
        <div className='section-box1'>
         <h3>Apply On Section</h3>
         <p>Apply on section is a game-changer, offering an unparalleled way to</p>
         <p className='section-para'> manage applications directly from your website. </p>
        <img src='images\motionarteffect-img11.png' />
        </div>
        <div className='section-box2'>
         <h3>Apply On Page</h3>
         <p>Take your website to new heights with Motion Art for Elementor.</p>
         <p className='section-para'> Embrace the power of motion and animation. </p>
        <img src='images\motionarteffect-img10.png' />
        </div>
        </div>

        <div className='section-box3'>
            <h2>Supported by All Popular Browsers</h2>
            <p>Rest assured, Motion Art is designed to be compatible </p>
            <p className='section-para3'>with all major web browsers.</p>
            <img src='images\motionarteffect-img8.png' />
        </div>
    </div>
  )
}

export default Section