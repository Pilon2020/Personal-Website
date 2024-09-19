// DetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import cardData from '../components/cardData';
import renderLayout from '../components/renderLayout';

const DetailsPage = () => {
  const { id } = useParams(); // Get the id from the URL
  const card = cardData.find((item) => item.id === parseInt(id, 10)); // Find the matching card

  if (!card) {
    return (
      <div>
        <h1 style={{ color: 'black' }}>No Project Found</h1>
        <p>We couldn't find the project you're looking for. Please check the URL or go back to the projects page.</p>
        <Link to="/projects">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Back to Projects
          </button>
        </Link>
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
