import React from 'react';
import AboutMeImg from '../media/AboutMe.jpg'; // Adjust the path if necessary

const AboutMe = () => {
    return (
        <div className="row">
            <div className="column">
                <img 
                    src={AboutMeImg}
                    className='AboutMeIMG'
                    style={{width:'100%', height:'100%'}}
                    alt='Headshot'
                />
            </div>
            <div className="column">
                <p>
                    I am not sure what I am going to put here but I don't want to duplicate my resume here just to have it linked at the bottom of the page.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
