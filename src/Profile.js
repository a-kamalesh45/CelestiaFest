import React from 'react'
import proflogo from './assets/prof.png'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {

    const Savedusername = localStorage.getItem("username");
    const Savedphno = localStorage.getItem("phone");
    const Savedemail = localStorage.getItem("email");
    const time = localStorage.getItem("time");
    const date = localStorage.getItem("date");
    

  return (
    <section className="profile">
        <div className='profile-box'>
            {/* <h1>Your Profile</h1> */}
            <div className="profile-innbox">
                <div className='profile-left'>
                    <img src={proflogo} alt="" />
                    <div className="prof-line1">
                    <h1>My Profile</h1>
                    <h1 className="date-time">{`Last Updated: ${date} at ${time}`}</h1>
                    </div>
                    <div className="my-info">
                      <div className='prof-line2'>
                        <h2>{Savedusername}</h2>
                        <h2>{Savedphno}</h2>
                      </div>
                        <h2>{Savedemail}</h2>
                    </div>
                    <Link to="/login">Change Info</Link>
                </div>
                <div className='profile-right'>
                <div className="prof-r-t">
                  <h3> Events Info:</h3>
                  <p><strong>Events participated</strong></p>
                  <ul>
                    <li>🌟 Space Hackathon</li>
                    <li>🚀 Launch Sim Challenge</li>
                    <li>🛰️ Orbit Design Contest</li>
                    <li>🔭 AstroTech Expo 2024</li>
                    <li>🧠 Zero-G Innovation Jam</li>
                    <li>🌌 Deep Space UI Design Sprint</li>
                    <li>👨‍🚀 Mars Mission Simulation</li>
                  </ul>
                </div>

                    <div className="prof-r-t prof-r-b">
                      <h3><i className="fas fa-award"></i> Achievements</h3>
                      <ul>
                          <li>Top 10 Finalist - NASA Space App</li>
                          <li>Best UI Award - Star Design 2025</li>
                          <li>1st Place - Galactic Hack 2024</li>
                          <li>Best Innovation - Orbital UX Summit</li>
                          <li>Technical Excellence - AstroBuild Fest</li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
