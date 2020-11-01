import React from 'react';
import Fade from 'react-reveal/Fade';

function About () {
        return (
            <div className='About'>
                
            <h2 className="heading"><Fade bottom cascade>O mnie.<hr/></Fade></h2>
            <div className='about-content'>
             <img src="AboutImg.jpg"  alt='about image' className="aboutImg" ></img>
                <Fade bottom>
                
            
                    <p>       &emsp; Cześć ! Nazywam się Sebastian Dubaj i jestem absolwentem politechniki lubelskiej, zdobyłem tytuł inżyniera informatyki w marcu 2020 roku.
                          Podczas studiów najbardziej zainteresowało mnie programowanie oraz projektowanie aplikacji webowych,
                           rozwijam się w tym kierunku i aktualnie poszukuję pierwszej pracy jako junior front-end developer, 
                           w której będę mógł wykorzystać dotychczas uzyskane umiejętności oraz rozwijać się w tym kierunku.<br/>
                           &emsp; Moje doświadczenie jako front-end developer zdobyłem w trakcie studiów poprzez wykonywanie projektów,
                         stworzenie aplikacji do pracy inżynierskiej oraz programowaniu własnych aplikacji.
                    </p>
                 </Fade>
            <div className="downArrow bounce">

            </div>
            </div>
        </div>  );
    
}
 
export default About;