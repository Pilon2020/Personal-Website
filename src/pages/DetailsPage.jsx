// DetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../components/cardData';
import renderLayout from '../components/renderLayout';

const DetailsPage = () => {
  const { id } = useParams(); // Get the id from the URL

  // Use cardData directly as it's an array
  const card = cardData.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div>
        <h1 style={{ color: 'Black' }}>No Project Found</h1>
      </div>
    );
  }

  return (
    <div>
      {renderLayout(card)}
    </div>
  );
};

export default DetailsPage;
