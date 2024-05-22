import React from 'react'
import './Header.css'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <div className='footer'>
        <h1>An All-Round Plugin With Powerful Features</h1>
        <p className='footer-para1'>Whether you're a seasoned web designer or just starting out, Motion Art for</p>
        <p className='footer-para2'>Elementor seamlessly integrates with the Elementor platform, providing you </p>
        <p className='footer-para2'>with a seamless and intuitive experience.</p>
       <motion.div className='footer-boxes'
        initial={{opacity:1,scale:1,x:-400}}whileInView={{opacity:1,scale:1,x:0}}transition={{duration:2}}
       >
        <div className='footer-box1'>
         <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img9.png`}/>
         <h3>Light Weight</h3>
         <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
        <div className='footer-box1'>
         <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img6.png`}/>
         <h3>Light Weight</h3>
         <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
        <div className='footer-box1'>
         <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img7.png`}/>
         <h3>Light Weight</h3>
         <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
       </motion.div>
       <div className='footer-info'>
       <div>
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
       </div>
       <div>
        <a className='document' href='https://qodematrix.com/docs/motion-art-for-elementor/'>Documentation</a>
        <a className='support' href='https://support.qodematrix.com/login'>Support</a>
       </div>
       </div>
    </div>
  )
}

export default Footer