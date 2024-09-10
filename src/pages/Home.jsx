import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Box sx={{ display: 'left', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1">
          Home
        </Typography>
        <Typography variant="body1">
          This is the projects I have been working on. Look at figma for design outline for this page.
          </Typography>
      </div>
    </Box>
  );
}

export default Home;