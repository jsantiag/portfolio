import React, { Component } from 'react';

import Nav from './components/Nav';
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 

import projects from './content/projects';
import progress from './content/progress';  
import aboutMe from './content/aboutMe';


class Root extends Component {
  render() {
    return (
      <main className="main-container">
        <Nav/>
        <About 
          statement={aboutMe}
        />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects
          projects={projects}
          progress={progress}
        />
        <Contact/>  
        <Footer/>
      </main>
     
    );
  }
}

export default Root;
