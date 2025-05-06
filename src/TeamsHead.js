import React from 'react'
import TeamCard from './TeamCard'
import './TeamCard.css'
import headData from './nssc_team_head.json'
import { Link } from 'react-router-dom'



const TeamsHead = () => {
  return (
    <section className='teams'>
        <div className="btns-switch">
        <Link to="/teamseccy" className="team-switch-button">G-SEC</Link>
        <Link to="/teamhead" className="team-switch-button">HEADS</Link>
        <Link to="/teamsubhead" className="team-switch-button">SUB-HEADS</Link>
        </div>
        <TeamCard json = {headData} ></TeamCard>
    </section>
  )
}

export default TeamsHead
