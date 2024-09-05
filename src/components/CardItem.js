import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardImage from './CardImage'; // Adjust path if needed
import CardContentSection from './CardContentSection'; // Adjust path if needed

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 1,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'forestgreen', //Fix with a better color
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const CardItem = ({ item, index, onFocus, onBlur, focusedCardIndex }) => (
  <StyledCard
    key={index}
    variant="outlined"
    onFocus={() => onFocus(index)}
    onBlur={onBlur}
    tabIndex={index}
    className={focusedCardIndex === index ? 'Mui-focused' : ''}
  >
    <CardImage image={item.img} />
    <CardContentSection title={item.title} description={item.description} />
  </StyledCard>
);

export default CardItem;
