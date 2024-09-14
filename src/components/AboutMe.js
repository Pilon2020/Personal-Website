import React from 'react';

const AboutMe = () => {
    return (
    <div class="row">
        <div class="column">
            <img 
            src='https://picsum.photos/3000'
            style={{height:'70vh', width:'auto', objectFit:'cover'}}
            />
        </div>
        <div class="column">
            <p>
                I am not sure what I am going to put here but I don't want to duplicate my resume here just to have it linked at the bottom of the page.
            </p>
        </div>
        
    </div>
    );
  }
  
  export default AboutMe;