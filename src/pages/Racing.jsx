import { Box, Typography } from '@mui/material';
import React from 'react';

const racing = () => {
  return (
    <Box sx={{ display: 'left', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Racing
        </Typography>
        <Typography>
          Racing Stuffs
          </Typography>
      </div>
    </Box>
  );
}

export default racing;