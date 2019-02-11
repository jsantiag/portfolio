import React, {PureComponent} from 'react'; 

class ProjectSkill extends PureComponent{
  render(){
    return <span className="proj-skill">{this.props.skill}</span>
  }
}

class ProjectStack extends PureComponent{
  render() {
    return (
      <div className="proj-skills">
        {this.props.skills.map((skill,index)=>{
        return <ProjectSkill skill={skill} key={index}/>;
        }
        )}
      </div>
    )
  }
}

class Friends extends PureComponent{
  render(){
    return(
      <div>
      <a className="friend" href={this.props.collaborators[1]}>{this.props.collaborators[0]}</a>
      <br/>
      </div>
    )
  }
}

class Collaboration extends PureComponent{
  render(){
    return(
      <div className="proj-collab">
      {this.props.collaborators.map((collaborators,index) => {
         return <Friends collaborators={collaborators} key={index}/>
      })
      }
      <br/>
      </div>
    )
  }
}

class ProjectLinks extends PureComponent {
  render(){
    const {github, live}=this.props.links;
    return(
      <div className="proj-links">
        <a href={github} className="project-link"> View Source </a>
        <a href={live} className="project-link live">Live Demo</a>
      </div>
    )
  }
}


class ProjectCard extends PureComponent {
  render() {
    const {title, description, image, alt, collaborators, links, skills} = this.props; 
    return (
      <div className="proj-card">
        <img className="proj-image" src = {image} alt={alt}/>
        <div className="proj-background"/>
        <div className = "proj-content" >
          <h3>{title}</h3>
          <p className="proj-description">{description}</p>
          {collaborators?<Collaboration collaborators={collaborators}/>:null}
          <ProjectStack skills={skills}/>
          {links?<ProjectLinks links={links}/>:null}
        </div>
      </div>
    )
  }
}

class Projects extends PureComponent{
  render(){
    const { projects } = this.props;
    
    return(
      <div className="proj-container">
        {projects.map(proj=>(      
          <ProjectCard 
            title={proj.title}
            description={proj.description}
            collaborators={proj.collaborators}
            image={proj.image}
            alt={proj.alt}
            links={proj.links}
            skills={proj.skills}
            key={proj.title}
          />
        ))}
      </div>
    );
  }
}
console.log(Projects);

export default Projects;