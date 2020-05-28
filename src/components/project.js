import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
            <div className='work'>

                
                <div className="projectInfo">
                <a href={this.props.url} target="_blank">
                    <img src={this.props.imageSrc}  alt={this.props.title}></img>
                </a>
                    <h3>{this.props.title}</h3>
                    <span>{this.props.service}</span><br/>
                    <a href={this.props.url}  className="myButton" target="_blank" >DEMO</a>
                    <a href={this.props.urlGit} className="myButton" target="_blank">KOD</a>
                    <hr/>
                </div>

            </div> 
        </Fade>);
    }
}
 
export default Project;