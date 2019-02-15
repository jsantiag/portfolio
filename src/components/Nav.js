/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, {PureComponent} from 'react';

class Nav extends PureComponent {
  render() {
    const {sprite}=this.props; 
    console.log(sprite);
    return (
     <div className="big-nav-container">
     <div className="nav-container">
        <li><a rel="noopener" target="_blank" href="https://github.com/jsantiag"><i alt="GitHub Account" className="fab fa-github-square fa-2x"></i></a></li>
        <li><a rel="noopener" target="_blank" href="https://www.linkedin.com/in/jocelyn-santiago-41a986149/"><i alt="Connect with me on LinkedIn"className="fab fa-linkedin fa-2x"></i></a></li>
        <li><a rel="noopener" target="_top" href="mailto:jocelyn.santiag@gmail.com" ><i className="fas fa-envelope-square fa-2x"></i></a></li>
    </div>
    <div className="intro-tagline"><h1 id="jsantiag">J.Santiago</h1><br/><h2 id="softdev">Software Developer</h2></div>
    </div>
    )
  }
}


export default Nav;
