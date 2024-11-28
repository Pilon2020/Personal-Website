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
                My engineering background, combining biomedical and mechanical disciplines, has equipped me with hands-on experience in areas like SolidWorks, 
                Python, MATLAB, and 3D printing. During my time at Cal Poly, I’ve honed my skills in problem-solving, design, and teamwork, with a focus on creating 
                innovative and practical solutions. My passion for engineering extends into my leadership in projects like designing a Wildland Fire Respirator, and a bespoke 
                handlebar for a bike. These experiences have strengthened my ability to collaborate in cross-functional teams and tackle complex challenges. 
                I am particularly driven to apply my skills toward impactful solutions, bridging engineering and public health to improve quality of life.
                </p>
                <br /><br />
                <p>
                Outside of academics and engineering, my passions range from <u>triathlon</u> and <u>race directing</u> to creative, hands-on pursuits like <u>leatherworking</u> and designing custom parts for
                various aspects of my life, like by bike.As a triathlete, I competed at the 2023 Ironman 70.3 World Championships and am focused on qualifying for and returning to the World 
                Championships in 2025. I balance my training with both academic and professional responsibilities, showcasing my dedication and discipline. I also have a strong background in 
                race directing, having led events like the Mustang Showdown Triathlon and the March Triathlon Series, where I honed my leadership and event management skills. Beyond athletics, 
                I am passionate about cycling and enjoy designing and building custom bike parts, experimenting with different materials to optimize my performance. These diverse interests reflect 
                my commitment to innovation, creativity, and community, while demonstrating my ability to manage multiple pursuits with passion and focus.
                </p>
            </div>
            <div onClick={handleDownload} className="download-resume">
                <p>Download Resume</p>
            </div>
        </div>


    );
}

export default AboutMe;
