import React from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../data';

function Projects ()  {
        return (
        <div className="Projects">

            <div className='heading'>
                <Fade bottom cascade>Projekty.<hr/></Fade>
            </div>

            <div className='work-content'>
                    {data.projects.map((project)=>(
                        <Project key={project.id}
                                title = {project.title}
                                service = {project.service}
                                imageSrc = {project.imageSrc}
                                url={project.url}
                                urlGit={project.urlGit}
                        ></Project>
                    ))}
            </div>
        </div> 
         );
    
}
 
export default Projects;