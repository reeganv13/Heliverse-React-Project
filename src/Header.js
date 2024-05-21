import React from 'react'
import './Header.css'
function Header() {
  return (
    <>
    <div className='header'>
        <div>
          <a href='/'> <img src='images\MotionArtEffect-logo.png'></img></a>
        
        </div>
        <div>
            <button>
                <a className='purchase-tag' href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'>
            Purchase Now
            </a>
            
            </button>
        </div>
    </div>
    <div className='hero'>
        <div className='box1'>
            <h3 className='colouringText1'>Tranform </h3>
            <h3 className='colouringText2'> Your Website</h3>
            <h3 className='normalText3'>With Motion Art</h3>
            <h3 className='normalText4'>Effect</h3>
        </div>
        <div className='box2'>
            <h1 className='normalText5'>Attract Your Visitors Attention With Colorful</h1>
            <h1 className='colouringText6'>Motion Art Effect</h1>
            <div className='paragraph'>
            <p>Unleash the power of creativity with Motion Art for Elementor - your</p>
            <p>ultimate solution for seamlessly integrating captivating animations into </p> 
            <p>your website. </p>
            </div>
           

        </div>
    </div>
    </>
  )
}

export default Header