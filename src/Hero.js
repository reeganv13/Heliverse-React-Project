import React from 'react'
import './Header.css'

const Hero = () => {
  return (
    <div className='container'>
        <h3 className='box-heading'>Trusted by thousands of users around the world</h3>
        <div className='box-container1'>
            <div className='boxes'>
                <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img2.png`}></img>
               <div> 
                <p><img decoding="async" class="alignnone size-full wp-image-1643" src={`${process.env.PUBLIC_URL}/images/motionarteffect-img4.png`} alt="" width="155" height="20"  sizes="(max-width: 155px) 100vw, 155px"/></p>
                <p>4.5 Score,9 Reviews</p>
                </div>
            </div>
            <div className='boxes'>
                <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img1.png`}></img>
                <div>
                <p><img decoding="async" src={`${process.env.PUBLIC_URL}/images/motionarteffect-img4.png`} alt="" width="155" height="20"  sizes="(max-width: 155px) 100vw, 155px"/></p>
                <p>4.5 Score,9 Reviews</p>
                </div>
            </div>
            <div className='boxes'>
                
                <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img3.png`}></img>
                <div>
                <p><img decoding="async" class="alignnone size-full wp-image-1643" src={`${process.env.PUBLIC_URL}/images/motionarteffect-img4.png`} alt="" width="155" height="20" sizes="(max-width: 155px) 100vw, 155px"/></p>
                <p>4.5 Score,9 Reviews</p>
                </div>
            </div>
        </div>
        <div className='box-container2'>
            <div className='box-1'>
            <h2>Turn Your Cursor Into A Colorful Magic & Charm Your Visitors</h2>
            <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse </p> 
            <p className='para-2'> your website with visually stunning motion art elements.</p>
            <button><a className='purchasefromenvato-tag' href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'>Purchase From Envato</a> </button>
            </div>
            <div className='box-2'>
                <img className='magic-stick'src={`${process.env.PUBLIC_URL}/images/motionarteffect-img5.png`}/>
            </div>
           
        </div>
    </div>
  )
}

export default Hero