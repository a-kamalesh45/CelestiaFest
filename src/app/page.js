import React from 'react'
import StarCanvas from './StarCanvas';
import Navbar from './Navbar/Navbar';
import './style.css'
import { HyperText } from './hyperText';

const page = () => {
  return (
    <div>
      <StarCanvas/>
      <Navbar/>
      <div className='home-pg'>
        <div className="astranaut">
          <img src="/assets/asnt.png" alt="" />
        </div>
        <div className="hero">
          <HyperText className='text-9xl'>NSSC</HyperText>
          <HyperText>National Students Space Challenge</HyperText>

        </div>
        <div className="ss">
          <img src="/assets/ss.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default page
