import React from 'react';
import Fade from 'react-reveal/Fade';


function Header() {
        return (
        <div className="Header">
            <div className="title-background">

                <div className="heading-logo">
                    <img src="logo1.png" width="150px" height="150px" alt="logo"/>

                        <div className="title" >

                            <Fade bottom cascade>Sebastian </Fade> 
          
                            <Fade bottom cascade>Dubaj.</Fade>
                      

                        </div>

                    <Fade bottom>
                        <p className='header-title'>
                          Front-end developer
                        </p>
                    </Fade>
                    <div className="mouse_scroll">
                        <div>
                            <span className="m_scroll_arrows one"></span>
                            <span className="m_scroll_arrows two"></span>
                            <span className="m_scroll_arrows three"></span>
                        </div>
                </div>
                </div>
            </div>
        </div>
        );
}

export default Header;