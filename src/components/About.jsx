import React from 'react'
import doctorData from '../data/doctorData'
import './styles.css'
const About = () => {
    const aboutData = doctorData.about;
    return (
        <section className="about" id="about">
            <h2>{aboutData.title}</h2>
            <p className='about-description'>{aboutData.description}</p>
            <h2>Highlights</h2>
            <div className="about-cards">
                {aboutData.highlights.map((highlight) => (
                    <div className="card">
                        <strong>{highlight.title}</strong>
                        {highlight.description}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About
