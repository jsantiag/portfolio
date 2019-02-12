import React, {PureComponent} from 'react'; 

class AboutMeSection extends PureComponent {
  render() {
    const {greetings, aboutMe, sprite} = this.props
    return (
      <div className="aboutMe-container">
        <div className="aboutMe-background"/>  
        <img href={sprite} alt="this is my pixel art self-portrait, short curly hair and gold hoops"/>        
        <h3>{greetings}</h3>
        <div className = "aboutMe-content" >
          <p className="aboutMe-blurb">{aboutMe}</p>
        </div>
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
      />
    )
  }
}

export default About; 