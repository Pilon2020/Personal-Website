// renderLayout.js
import React from 'react';
import Layout0 from './Layout0';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

const renderLayout = (card) => {
  switch (card.layout) {
    case 1:
      return <Layout1 card={card} />;
    case 2:
      return <Layout2 card={card} />;
    case 0:
    default:
      return <Layout0 card={card} />;
  }
};

export default renderLayout;
