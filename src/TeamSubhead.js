import React from 'react'
import TeamCard from './TeamCard'
import './TeamCard.css'
import subheadData from './nssc_team_subhead.json'
import { Link } from 'react-router-dom'

const TeamSubhead = () => {
  return (
    <section className='teams'>
        <div className="btns-switch">
        <Link to="/teamseccy" className="team-switch-button">G-SEC</Link>
        <Link to="/teamhead" className="team-switch-button">HEADS</Link>
        <Link to="/teamsubhead" className="team-switch-button">SUB-HEADS</Link>
        </div>
        <TeamCard json = {subheadData}></TeamCard>
    </section>
  )
}

export default TeamSubhead
