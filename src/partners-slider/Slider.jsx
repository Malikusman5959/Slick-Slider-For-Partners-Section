import React, { useEffect } from 'react'
import './style.css'
import adidas from './images/adidas.png'
import facebook from './images/facebook.png'
import google from './images/google.png'
import instagram from './images/instagram.png'
import nike from './images/nike.png'
import twitter from './images/twitter.png'
import uber from './images/uber.png'
import youtube from './images/youtube.png'


// MAKE SURE to link scripts in the index.html file when using this slder in another project. 

function Slider() {

  return (
    <div className='flex flex-col justify-center items-center'>
        <section class="customer-logos slider w-[80%]">
            <div class="slide"><img src={adidas} alt="logo"/></div>
            <div class="slide"><img src={facebook} alt="logo"/></div>
            <div class="slide"><img src={google} alt="logo"/></div>
            <div class="slide"><img src={instagram} alt="logo"/></div>
            <div class="slide"><img src={nike} alt="logo"/></div>
            <div class="slide"><img src={twitter} alt="logo"/></div>
            <div class="slide"><img src={uber} alt="logo"/></div>
            <div class="slide"><img src={youtube} alt="logo"/></div>
        </section>
    </div>
  )
}

export default Slider