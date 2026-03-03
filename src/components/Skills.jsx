import React from 'react'
import doctorData from '../data/doctorData'
import "./styles.css"

const Skills = () => {
  const skillsData = doctorData.skills;

  return (
    <section className='skills' id='skills'>
        <h2 className='skills__title'>{skillsData.title}</h2>

        <div className='skills__container'>
            {skillsData.coreSkills.map((skill, index) => (
                <div key={index} className='skills__card'>
                    <p className='skills__text'>{skill}</p>    
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills