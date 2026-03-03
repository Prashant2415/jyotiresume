import React from 'react'
import doctorData from '../data/doctorData'

const Contact = () => {
    const contactInfo = doctorData.contactSection;
    return (
    <section className='contact' id='contact'>
        <h2>{contactInfo.title}</h2>
        <div className="contact-container">
            {/* <p className='contact-description'>{contactInfo.description}</p>
            <div className="contact-card">
                <p className='contact-email'>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p className='contact-location'>Location: {contactInfo.location}</p>
            <a href={`mailto:${contactInfo.email}`} className="contact-button">{contactInfo.cta}</a>
            </div> */}
            <p className='contact-description'>{contactInfo.description}</p>
            <div className='contact-card'>
                <p className='contact-email'>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                <p className='contact-location'>Location: {contactInfo.location}</p>
                {/* <a href={`mailto:${contactInfo.email}`} className="contact-button">{contactInfo.cta}</a> */}
            </div>
        </div>
    </section>
  )
}

export default Contact
