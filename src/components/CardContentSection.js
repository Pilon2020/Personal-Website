import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'; // Make sure to import Box if it's used

const StyledCardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 16,
  flexGrow: 1,
  maxHeight: '150px',
  overflow: 'hidden',
  position: 'relative', // Add this to position child elements relative to this container
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4, // Max number of lines to display
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingBottom: '20px',
});

const DateContainer = styled(Box)({
  position: 'absolute', // Position absolute to place it in the bottom right
  bottom: 0,
  right: 0,
  padding: '5px', // Optional: add padding if needed
});

const CardContentSection = ({ title, description, date }) => (
  <StyledCardContent>
    <Typography gutterBottom variant="h6" component="div">
      {title}
    </Typography>
    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
      {description}
    </StyledTypography>
    <DateContainer>
      <Typography variant="body2" color="text.secondary">
        {date}
      </Typography>
    </DateContainer>
  </StyledCardContent>
);

export default CardContentSection;
