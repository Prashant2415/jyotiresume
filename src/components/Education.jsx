import React from 'react'
import doctorData from '../data/doctorData'

const Education = () => {
    const educationData = doctorData.education;
  return (
    <section className='education' id="education">
        <h2>{educationData.title}</h2>
        <div className='education-container'>
          {educationData.degrees.map((degree,index)=>(
            <div className='education-card' key={index}>
              <h3 className='education-card-title'>{degree.duration}</h3>
              <div className='education-card-description'>
                <h3 className='education-card-degree'>{degree.degree}</h3>
                <p className='education-card-institution'>{degree.institution}</p>
                <p className='education-card-des'>{degree.description}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Education
