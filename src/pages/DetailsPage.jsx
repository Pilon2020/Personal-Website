import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../components/cardData'; // Adjust path if needed
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DetailsPage = () => {
  const { id } = useParams(); // Get the id from the URL

  // Use cardData directly as it's an array
  const card = cardData.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <Box>
        <Typography variant="h4" color="error">No Project Found</Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      {/* Top section with two images */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={card.images[0]} alt={card.title} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6}>
          <img src={card.images[1]} alt={card.title} style={{ width: '100%', height: '', objectFit:'cover' }} />
          <img src={card.images[1]} alt={card.title} style={{ width: '100%', height: '', objectFit:'cover' }} />
        </Grid>
      </Grid>

      {/* Main paragraph */}
      <Box mt={4}>
        <Typography variant="h4">{card.title}</Typography>
        <Typography variant="body1" mt={2}>
          {card.description}
        </Typography>
      </Box>

      {/* Two-column section below the main paragraph */}
      <Grid container spacing={4} mt={4}>
        {/* Left column with an image */}
        <Grid item xs={12} md={6}>
          <img src={card.images[2]} alt={card.title} style={{ width: '100%', height: 'auto' }} />
        </Grid>

        {/* Right column with more text */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {card.additionalText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsPage;
