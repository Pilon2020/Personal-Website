import React from 'react';
import AboutMe from '../components/AboutMe';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Header Section */}
      <div>
        <h1 style={{ marginBottom: '0px' }}>About Me</h1>
      </div>

      {/* AboutMe Section */}
      <div style={{ marginTop: '5px', padding: '5px'}}>
        <AboutMe />
      </div>
    </div>
  );
}

export default Home;
