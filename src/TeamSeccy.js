import React from 'react'
import TeamCard from './TeamCard'
import './TeamCard.css'
import secyData from './nssc_team_secy.json'
import { Link } from 'react-router-dom'


const TeamSeccy = () => {
  return (
    <section className='teams'>
        <div className="btns-switch">
        <Link to="/teamseccy" className="team-switch-button">G-SEC</Link>
        <Link to="/teamhead" className="team-switch-button">HEADS</Link>
        <Link to="/teamsubhead" className="team-switch-button">SUB-HEADS</Link>
        </div>
        <TeamCard json ={secyData}></TeamCard>
    </section>
  )
}

export default TeamSeccy
