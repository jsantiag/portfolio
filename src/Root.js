import React, { Component } from 'react';

import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact'; 

import projects from './content/projects';
import './components/_Progress.css';
import './components/_Nav.css';
import './components/_Contact.css';

export default class Root extends Component {
  render() {
    return (
      <main className="main-container">
        <Nav/>
        <Projects
          projects={projects}
        />
        <Contact/>  
      </main> 
    );
  }
};
