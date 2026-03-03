import React from 'react'
import doctorData from '../data/doctorData'
import "./styles.css"
const CommunityWork = () => {
    const communityWorkData = doctorData.communityWork;
  return (
    <section className='community-work' id='community-work'>
        <h2>{communityWorkData.title}</h2>
        <div className='community-container'>
            {communityWorkData.activities.map((activity, index) => (
                <div className='community-card' key={index}>
                    <p className='community-activity'>{activity}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default CommunityWork
