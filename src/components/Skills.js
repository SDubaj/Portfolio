import React from 'react';
import Fade from 'react-reveal/Fade';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import   {faLaptopCode}  from "@fortawesome/free-solid-svg-icons";
//yimport   {faReact,faSass,faCss3Alt,faHtml5,faBootstrap,faJs,faNpm,faGit,faYarn,faAdobe,faDatabase,faPhp,faJava, faCss3} from "@fortawesome/free-brands-svg-icons";
const SkillIcons = [
    {icon : "htmlicon.png", name:"HTML5"},   
    {icon : "css3.png", name:"CSS3"},   
    {icon : "bootstrap.png", name:"Bootstrap"},
    {icon : "sass.png", name:"Sass"},  
    {icon : "react.png", name:"React + Redux"},   
    {icon : "js.png", name:"JavaScript"}
]
const OtherSkills = [
    {icon : "mysql.png", name:""},   
    {icon : "tsql.png", name:""},   
    {icon : "java4.png", name:""},   
    {icon : "github.png", name:"Github"},   
    {icon : "npm.png", name:"Npm"},
    {icon : "photoshop.png", name:"Photoshop"},
    {icon : "linux.png", name:"Linux"},
    {icon : "slack.png", name:"Linux"}
]
const skillsMap=SkillIcons.map(item =>(
    <div className="skill">
        <img src={item.icon} alt={item.name} height="70px" width="70px"/>
        <span className="skillText">{item.name}</span>
    </div>
)) ;
const otherSkillsMap=OtherSkills.map(item =>(
    <div className="skill">
        <img src={item.icon} alt={item.name} height="70px" width="70px"/>
        <span className="skillText">{item.name}</span>
    </div>
)) ;

function About () {
        return (
            <div className='Skills'>
                
            <h2 className="heading"><Fade bottom cascade>Technologie<hr/></Fade></h2>
            <div className='skill-content'>
            <Fade bottom>
                <h3>Front-end</h3>
                <div className="frontSkills">
                    {skillsMap}
                </div>
                <h3>Podstawy innych technologii oraz narzędzia</h3>
                <div className="frontSkills">
                    {otherSkillsMap}
                </div>
                

             </Fade>
            </div>
        </div>  );
    
}
 
export default About;