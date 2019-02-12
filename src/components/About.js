/* eslint-disable no-undef */
import React, {Component, PureComponent} from 'react'; 

class AboutMeSection extends Component {
    constructor(props){
      super(props);
      this.state = {
        hideAboutMe: true
      }; 
    }
    
    handleAboutMe(event){
      event.preventDefault();
      this.setState({hideAboutMe:!this.state.hideAboutMe})
    }

  render() {
    const {greetings, sprite} = this.props;
    console.log(sprite);
    return (
    <div className="aboutMe-container">
      <section className="sprite-greeting"> 
          <img src={sprite} alt="this is my pixel art self-portrait, short curly hair and gold hoops"/>        
          <h3>{greetings}</h3>
      </section>  
    </div>
    )
  }
}
class About extends PureComponent{
  render(){
    const {aboutMe}=this.props; 
    console.log(aboutMe);
    return(
      <AboutMeSection
        greetings={aboutMe.greetings}
        aboutMe={aboutMe.aboutMe}
        sprite={aboutMe.sprite}
      />
    )
  }
}

export default About; 