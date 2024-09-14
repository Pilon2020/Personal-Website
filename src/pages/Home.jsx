import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Box sx={{ display: 'left', flexDirection: 'column', gap: 4 }}>
      <div>
        <h1 style={{marginBottom: '0px'}}>
          Home
        </h1>
        <p style={{marginTop:'0px'}}>
          This is the projects I have been working on. Look at figma for design outline for this page.
          </p>
      </div>
    </Box>
  );
}

export default Home;