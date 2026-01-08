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
            <img 
                src={AboutMeImg}
                className="AboutMeIMG"
                alt="Headshot"
            />
            <div className="about-me-text AboutMe">
                <p>
                My engineering background blends biomedical and mechanical disciplines with hands-on experience in SolidWorks, Python, MATLAB, and 3D printing. At Cal Poly I’ve honed problem-solving, design, and teamwork skills while building practical solutions—from a Wildland Fire Respirator to a bespoke handlebar. Those projects taught me how to collaborate across disciplines and ship useful work, and I’m motivated to keep applying those skills to meaningful, human-centered problems.
                </p>
                <br /><br />
                <p>
                Outside of engineering, I split my time between <u>triathlon</u>, <u>race directing</u>, and hands-on craft like <u>leatherworking</u> and designing custom bike parts. I raced at the 2023 Ironman 70.3 World Championships and am working toward a return in 2025, balancing training with academic and professional commitments. I’ve directed events like the Mustang Showdown Triathlon and the March Triathlon Series, sharpening my leadership and logistics skills. Building and testing custom components for my bike keeps me curious, creative, and rooted in the community.
                </p>
            </div>
            <div className="download-resume">
                <button  onClick={handleDownload} >Download Resume</button>
            </div>
        </div>


    );
}

export default AboutMe;
