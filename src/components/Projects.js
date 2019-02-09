import React, {PureComponent} from 'react'; 


class ProjectStack extends PureComponent{
  render() {
    return (
      <div className="proj-skills">
      {this.props.stack.map((skill,index)=>{
        return <ProjectStack skill={skill} key={index}/>;
      })}
      </div>
    )
  }
}

class Collaboration extends PureComponent{
  render(){
    return(
      <div className="proj-collab">
      {this.props.collaborators.map((friend,index)=>{
        return <Collaboration friend={friend[0]} link={friend[1]} key={index}/>
      })}
      </div>
    )
  }
}

class ProjectLinks extends PureComponent {
  render(){
    const {github, live}=this.props.links;
    return(
      <div className="proj-links">
        <a href={github}> View Source </a>
        <a href={live}>Live Demo</a>
      </div>
    )
  }
}


class ProjectCard extends PureComponent {
  render() {
    const {title, description, demo, collaborators, links, image, alt, stack} = this.props; 
    return (
      <div className="proj-card">
        <img className="proj-image" src = {image} alt={alt}/>
        <div className="proj-background"/>
        <div className = "proj-content" >
          <h3>{title}</h3>
          <p className="proj-description" description={description}/>
          {collaborators.length > 0? <Collaboration collaborators={collaborators}/>:null}
          {demo.length > 0?<p className="demo-cred">Use these demo credentials to check out the live site: {demo[0][0]}:{demo[0][1]},{demo[1][0]}:{demo[1][1]}</p>:null}
          <ProjectStack skills={stack}/>
          <ProjectLinks links={links}/>
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
            demo={proj.demo}
            stack={proj.stack}
            key={proj.title}
          />
        ))}
      </div>
    );
  }
}

export default Projects;