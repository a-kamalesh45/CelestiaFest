import React from 'react'
import fb from './assets/fb.png'
import gmail from './assets/gmail.png'
import linkedin from './assets/linkedin3.png'
import './TeamCard.css'

const TeamCard = ({json}) => {
  return (
    <div className="team-card-cont">
        <div className="head-cont">
            {json.map((data, index) => {
                return (
                    <div className="head-card" key={index}>
                        <img src={`https://${data.image}`}alt="head" />
                        <h3>{data.name}</h3>
                        <h4>{data.title}</h4>
                        <p>{data.bio}</p>
                        <img src={fb} alt="" />
                        <img src={gmail} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TeamCard
