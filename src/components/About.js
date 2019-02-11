import React, {PureComponent} from 'react'; 

class AboutMeSection extends PureComponent {
  render() {
    const {greetings, aboutMe} = this.props
    return (
      <div className="aboutMe-container">
        <div className="aboutMe-background"/>
        <div className = "aboutMe-content" >
          <h3>{greetings}</h3>
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