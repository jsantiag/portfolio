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
        <Nav/>
        <About 
          aboutMe={aboutMe}
          />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects
          projects={projects}
        />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        {/* <Contact/>   */}
        {/* <Footer/> */}
      </main> 
    );
  }
};
