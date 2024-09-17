import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../components/cardData'; // Adjust path if needed
import parse from 'html-react-parser';
import ViewableImage from '../components/ViewableImage';

const DetailsPage = () => {
  const { id } = useParams(); // Get the id from the URL

  // Use cardData directly as it's an array
  const card = cardData.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>No Project Found</h1>
      </div>
    );
  }

  return (
    <div className='ProjectImgs' >
      <div className='ImgColumns'>
          <ViewableImage 
            src={card.images[0] ? card.images[0] : 'https://picsum.photos/3000'}
            className='Layout0'  
          />
        <div className='StackedImg'>
          <ViewableImage
            src={card.images[1] ? card.images[1] : 'https://picsum.photos/3000'}
            className='SubImage' 
          />
          <ViewableImage
            src={card.images[2] ? card.images[2] : 'https://picsum.photos/3000'}
            className='SubImage' 
          />
        </div>
      </div>


      {/* Main paragraph */}
      <div>
        <h2>{card.title}</h2>
        <p className='description'>{parse(card.description)}</p>
      </div>

      {/* Two-column section below the main paragraph */}
      <div className='FeatureColumn'>
        <div>
          <img className='FeatureImg'
            src={card.images[3] ? card.images[3] : 'https://picsum.photos/5000/3000'}
            alt={card.title} />
        </div>

        <div className='FeatureText'>
          <h3>Features:</h3>
          <p className='description'>{parse(card.features)}</p>
          <p className='description'>{card.additionalText}</p>
        </div>
      </div>

      
      {/* Additional sections */}
      <div style={{ marginTop: '32px' }}>
        {card.specifications && (
          <>
            <h3>Technical Specifications:</h3>
            <p>{card.specifications}</p>
          </>
        )}
        {(card.cadFiles || card.AddPhotos) && (
          <>
            <h3>Project Files</h3>
            {card.cadFiles && (
              <>
                <h4 className='indented'>Cad Files:</h4>
                <p>{card.cadFiles}</p>
              </>
            )}
            {card.AddPhotos && (
              <>
                <h4 className='indented'>Additional Photos:</h4>
                <p>{card.AddPhotos}</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
