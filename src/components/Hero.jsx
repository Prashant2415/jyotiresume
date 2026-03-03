import React from 'react'
import doctorData from '../data/doctorData'
import image from '../assets/img5.png'
import './styles.css'
const Hero = () => {
    const profileData = doctorData.profile;
  return (
     <section className="hero">
      <div className="hero-content">
        <h1>Hi there, I’m <br/>{profileData.name}</h1>
        <p>{profileData.designation}</p>
        <p>{profileData.tagline}</p>
      </div>
      <div className="avatar-placeholder">
        <img src={image} alt="JS Avatar" className="avatar-image" />
      </div>
    </section>
  )
}

export default Hero
