import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledCardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 16,
  flexGrow: 1,
  maxHeight: '150px',
  overflow: 'hidden',
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5, //max number of lines to display
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const CardContentSection = ({ title, description }) => (
  <StyledCardContent>
    <Typography gutterBottom variant="h6" component="div">
      {title}
    </Typography>
    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
      {description}
    </StyledTypography>
  </StyledCardContent>
);

export default CardContentSection;
