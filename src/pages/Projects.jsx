import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import cardData from '../components/cardData';
import CardItem from '../components/CardItem';
import { Box } from '@mui/material';

export default function Projects() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const data = cardData;

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div>
        <h2 style={{marginBottom: '0px'}}>Projects</h2>
        <p style={{marginTop: '0px'}}>
          These are the projects I have been working on. Most of these projects are on going as I tend to hop around from 
          project to project, working on each of them and updating them as I think of new ways to improve or expand on what
          I have already done. 
        </p>
      </div>

      <Box sx={{ width: '100%', minHeight: '500px' }}> {/* Adjust height as needed */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          spacing={4} // Ensure this is set to the desired spacing
        >
          {data.map((item, index) => (
            !item.hidden && ( // Only render if hidden is false
              <Link to={`/projects/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                <CardItem
                  item={item}
                  index={index}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  focusedCardIndex={focusedCardIndex}
                />
              </Link>
            )
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}
