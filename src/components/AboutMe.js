import React from 'react';
import AboutMeImg from '../media/AboutMe.jpg'; // Adjust the path if necessary

const AboutMe = () => {
    return (
<div className="about-me-container">
    <div className="about-me-column">
        <img 
            src={AboutMeImg}
            className='AboutMeIMG'
            alt='Headshot'
        />
    </div>
    <div className="about-me-column AboutMe">
        <p>
            I am not sure what I am going to put here but I don't want to duplicate my resume here just to have it linked at the bottom of the page.
        </p>
    </div>
</div>

    );
}

export default AboutMe;
