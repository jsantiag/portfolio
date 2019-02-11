import React, {PureComponent} from 'react';


class Nav extends PureComponent {
  render() {
    return (
     <div className="nav container">
      <div className="logo">
        <h2>j.santiago</h2>
      </div> 
      <div className="scroll-link-container">
        <li>Projects</li>
        <li>Contact</li>
      </div>
    </div>
    )
  }
}

export default Nav;
