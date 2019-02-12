import React, {PureComponent} from 'react';

class Nav extends PureComponent {
  render() {
    const {sprite}=this.props; 
    console.log(sprite);
    return (
     <div className="nav-container">
      <div className="scroll-link-container">
        <li>Projects</li>
        <li>Contact</li>
      </div>
    </div>
    )
  }
}


export default Nav;
