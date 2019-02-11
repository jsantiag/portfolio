import React, {PureComponent} from 'react';
import me from '../images/mysprite(2).jpg';

class Nav extends PureComponent {
  render() {
    return (
     <div className="nav-container">
      <div className="logo">        
        <img href={me} alt="this is my pixel art self portrait! Short curly hair and gold hoops are as true to me as it gets "></img>
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
