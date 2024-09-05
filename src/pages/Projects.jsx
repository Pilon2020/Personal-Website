import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Masonry from 'react-masonry-css';
import cardData from '../components/cardData'; // Adjust path if needed
import CardItem from '../components/CardItem'; // Adjust path if needed

export default function Projects() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const data = cardData(); // Call the function to get the data

  // Define how many columns for each breakpoint
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Projects
        </Typography>
        <Typography>This is the projects I have been working on. Look at figma for design outline for this page.</Typography>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, index) => (
          <CardItem
            key={index}
            item={item}
            index={index}
            onFocus={handleFocus}
            onBlur={handleBlur}
            focusedCardIndex={focusedCardIndex}
          />
        ))}
      </Masonry>
    </Box>
  );
}
