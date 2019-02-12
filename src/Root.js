import React, { Component } from 'react';

import Nav from './components/Nav';
import About from './components/About'; 
import Projects from './components/Projects';
// import Contact from './components/Contact'; 
// import Footer from './components/Footer'; 

import projects from './content/projects';
import aboutMe from './content/aboutMe';
import './components/_Progress.css';
import './components/_About.css';
import './components/_Nav.css';

export default class Root extends Component {
  render() {
    return (
      <main className="main-container">
        <Nav sprite={aboutMe.sprite}/>
        <About 
          aboutMe={aboutMe}
          />
        <h1 id="projects" className="section-title">
          Projects
        </h1> 
        <hr id="proj-line"></hr> 
        <Projects
          projects={projects}
        />
        <h1 id="contact" className="section-title">
          Contact me!
        </h1>
        <hr></hr>
        {/* <Contact/>   */}
        {/* <Footer/> */}
      </main> 
    );
  }
};
