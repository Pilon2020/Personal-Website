import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const CardImage = ({ image }) => (
  <CardMedia
    component="img"
    image={image}
    sx={{
      borderBottom: '1px solid',
      borderColor: 'divider',
      width: '100%',
      height: 'auto',
    }}
  />
);

export default CardImage;
