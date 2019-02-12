import React, {Component} from 'react'; 
import linkedin from '../images/linkedin';
import resume from '../images/resumeIcon';
import github from '../images/githubIcon.png';

export default class Contact extends Component{
  render(){
    return (
      <div>
        <a href="https://www.linkedin.com/in/jocelyn-santiago-41a986149/"><img src={linkedin} alt="Connect with me on LinkedIn"/></a>
        <a href="https://docs.google.com/document/d/113sjni5Jweu-diXR5LjHLOF5Voa6ssCLrJDHbjOEQ6k/edit?usp=sharing"><img src={resume} alt="Check out my resume"/></a>
        <a href="https://github.com/jsantiag"><img src={github} alt="Check out my GitHub"/></a>
      </div>
    )
  }
}
