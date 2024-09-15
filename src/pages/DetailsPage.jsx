// DetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import cardData from '../components/cardData';
import renderLayout from '../components/renderLayout';

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
    <Box>
      {renderLayout(card)}
    </Box>
  );
};

export default DetailsPage;
