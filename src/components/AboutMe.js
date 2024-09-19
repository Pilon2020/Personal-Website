import React from 'react';
import AboutMeImg from '../media/AboutMe.jpg'; // Adjust the path if necessary
import resume from '../media/Resume.pdf'

const AboutMe = () => {

    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement("a");
        link.href = resume;
        link.target = "_blank";

        document.body.appendChild(link);
        link.click();

        // Remove the anchor from the body
        document.body.removeChild(link);
        };

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
                    Resume is linked at the bototm of the page, this should be stuff that to highlight from the resume, but also to hightlight stuff that might not be on the resume
                    for one reason or another, show more depth as a person other than the stuff that is obvious on the resume.
                </p>
            </div>
            <div onClick={handleDownload}>
                <p>
                Download Resume
                </p>
            </div>
        </div>

    );
}

export default AboutMe;
