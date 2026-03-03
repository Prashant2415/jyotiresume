import React from 'react'
import doctorData from '../data/doctorData'
import "./styles.css"
const Training = () => {
    const traingData = doctorData.trainingAndConferences;
  return (
    <section className='training' id='training'>
        <h2>{traingData.title}</h2>
        <div className='training-container'>
            {traingData.events.map((event,index)=>(
                <div className='training-card' key={index}>
                    <p className='training-event'>{event}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Training
