import React from 'react';
import AboutMe from '../components/AboutMe';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Header Section */}
      <div>
        <h2 className='pagetitle'>About Me</h2>
      </div>

      {/* AboutMe Section */}
      <div>
        <AboutMe />
      </div>
    </div>
  );
}

export default Home;
