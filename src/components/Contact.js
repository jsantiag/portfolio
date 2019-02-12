/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react'; 


export default class Contact extends Component{
  render(){
    return (
      <section className="contact-footer">
      <li><a className="footer" rel="noopener" target="_blank" href="https://github.com/jsantiag">GitHub</a></li>
      <li><a className="footer" rel="noopener" target="_blank" href="https://www.linkedin.com/in/jocelyn-santiago-41a986149/">LinkedIn</a></li>
      <li><a className="footer" rel="noopener" target="_top" href="mailto:jocelyn.santiag@gmail.com" >jocelyn.santiago@gmail.com</a></li>
      </section>
    )
  }
}
