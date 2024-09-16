import React from 'react';
import Card from '@mui/material/Card';
import CardImage from './CardImage'; 
import CardContentSection from './CardContentSection';

const CardItem = ({ item, index, onFocus, onBlur, focusedCardIndex }) => (
  <Card
    key={index}
    variant="outlined"
    onFocus={() => onFocus(index)}
    onBlur={onBlur}
    tabIndex={index}
    className={`styledCard ${focusedCardIndex === index ? 'Mui-focused' : ''}`}
  >
    <CardImage image={item.images[0]} />
    <CardContentSection title={item.title} description={item.carddescription} date={item.date}/>
  </Card>
);

export default CardItem;