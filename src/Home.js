import React from 'react'
import './Home.css'
import logo from './assets/logo8.png'

const Home = () => {
  return (
    <section className='home'>
      <div className="hero-cont">
        <div className='hero'>
            <div className='hero-img'>
                <img src={logo} alt="" />
            </div>
            <div className='hero-text'>
                <h1 className='fest-name'>CELESTIA</h1>
                <h1>A Journey Through Space, Time, and Celebration</h1>
                <h2>India's Largest Space Themed Fest</h2>
            </div>
        </div>
        <div style={{ width: "25vw" }}>
            {/* Content goes here */}
        </div>
      </div>

    </section>      
  )
}

export default Home