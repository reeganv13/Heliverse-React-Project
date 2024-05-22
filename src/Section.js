import React from 'react'
import './Header.css'
import { motion } from 'framer-motion'
const Section = () => {
  return (
    <div className='section'>
        <h1 className='section-heading'>Apply On Any Section Or Enable For Whole Page</h1>
        <div className='section-boxes'>
        < motion.div className='section-box1'
        initial={{scale:1,opacity:1,x:-200}} whileInView={{scale:1,opacity:1,x:0}} transition={{duration:1}}
        >
         <h3>Apply On Section</h3>
         <p>Apply on section is a game-changer, offering an unparalleled way to</p>
         <p className='section-para'> manage applications directly from your website. </p>
        <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img11.png`} />
        </motion.div>
        <motion.div className='section-box2'
        initial={{scale:1,opacity:1,x:200}} whileInView={{scale:1,opacity:1,x:0}} transition={{duration:1}}
        >
         <h3>Apply On Page</h3>
         <p>Take your website to new heights with Motion Art for Elementor.</p>
         <p class Name='section-para'> Embrace the power of motion and animation. </p>
        <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img10.png`}/>
        </motion.div>
        </div>

        <motion.div className='section-box3'
        initial={{scale:0.5,opacity:0.5}} whileInView={{scale:1,opacity:1,x:-50}} transition={{duration:1}}
        >
            <h2>Supported by All Popular Browsers</h2>
            <p>Rest assured, Motion Art is designed to be compatible </p>
            <p className='section-para3'>with all major web browsers.</p>
            <img src={`${process.env.PUBLIC_URL}/images/motionarteffect-img8.png`} />
        </motion.div>
    </div>
  )
}

export default Section