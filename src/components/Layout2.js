import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData'; // Adjust path if needed
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import parse from 'html-react-parser';
import ViewableImage from './ViewableImage';

const DetailsPage = () => {
  const { id } = useParams(); // Get the id from the URL

  // Use cardData directly as it's an array
  const card = cardData.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <Box>
        <h1 style={{ color: 'Black' }}>No Project Found</h1>
      </Box>
    );
  }

  return (
    <Box p={4}>
      {/* Top section with two images */}
      <Grid container spacing={2} style={{ width: '100%', justifyContent:'center',alignItems: 'center' }}>
        {/* Left image (card.images[0]) */}
        <Grid item xs={6}>
          <ViewableImage 
            src={card.images[0] ? card.images[0] : 'https://picsum.photos/3000'}  
            style={{ width: '90vw', height: 800, objectFit: 'cover' }} 
          />
        </Grid>
      </Grid>

      {/* Main paragraph */}
      <Box mt={4}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </Box>

      {/* Two-column section below the main paragraph */}
      <Grid container spacing={4} mt={4}>
        {/* Left column with an image */}
        <Grid item xs={12} md={6}>
          <img                                                                                              /* THIS NEEDS TO BE UPDATED TO A CLICKABLE IMAGE, BUT AT THE MOMENT I CANT FIGURE OUT*/
            src={card.images[3] ? card.images[3] : 'https://picsum.photos/5000/3000'}                       /* HOW TO DO THIS WHILE ALSO KEEPING IT THE RIGHT SIZE */
            alt={card.title} 
            style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain' }} 
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/200/300'; }}
          />
        </Grid>

        {/* Right column with more text */}
        <Grid item xs={12} md={6}>
          <h3>Features:</h3>
          <p>{parse(card.features)}</p>
          <p>{card.additionalText}</p>
        </Grid>
      </Grid>
      
      {/* Additional sections */}
      <Box mt={4}>
        {card.specifications && (
          <>
            <h3>Technical Specifications:</h3>
            <p>{card.specifications}</p>
          </> )}
        {(card.cadFiles || card.AddPhotos) && (
          <>
          <h3>Project Files</h3>
          {card.cadFiles && (
            <>
              <h4 className='indented'>Cad Files:</h4>
              <p>{card.cadFiles}</p>
            </> )}
          {card.AddPhotos && (
            <>
              <h4 className='indented'>Additional Photos:</h4>
              <p>{card.AddPhotos}</p>
            </> )}</>
        )}
      </Box>
    </Box>
  );
};

export default DetailsPage;
