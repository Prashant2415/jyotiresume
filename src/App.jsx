import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Training from './components/Training';
import CommunityWork from './components/CommunityWork';
import Contact from './components/Contact';
function App() {

  return (
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Services/>
    <Experience/>
    <Education/>
    <Research/>
    <Training/>
    <CommunityWork/>
    <Contact/>
    </>
  );
}

export default App;