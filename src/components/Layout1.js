import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData';
import parse from 'html-react-parser';
import ViewableImage from './ViewableImage';

const DetailsPage = () => {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>No Project Found</h1>
      </div>
    );
  }

  return (
    <div className='ProjectImgs'>
      {/* Top section with two images */}
      <div className="ImgColumns">
        {/* Left images */}
        <div className="StackedImg">
          {/* Access image src and position */}
          <ViewableImage 
            src={card.images[0]?.src ? card.images[0].src : 'https://picsum.photos/3000'}
            className='MainImage'
            style={{
              objectFit: 'cover',
              objectPosition: card.images[0]?.position || 'center center', // Apply position dynamically
            }}
          />
          <ViewableImage 
            src={card.images[1]?.src ? card.images[1].src : 'https://picsum.photos/3000'}
            className='SubImage'
            style={{
              objectFit: 'cover',
              objectPosition: card.images[1]?.position || 'center center', // Apply position dynamically
            }}
          />
        </div>

        {/* Right images */}
        <div className="StackedImg">
          <ViewableImage 
            src={card.images[2]?.src ? card.images[2].src : 'https://picsum.photos/3000'}
            className='SubImage'
            style={{
              objectFit: 'cover',
              objectPosition: card.images[2]?.position || 'center center', // Apply position dynamically
            }}
          />
          <ViewableImage 
            src={card.images[3]?.src ? card.images[3].src : 'https://picsum.photos/3000'}
            className='SubImage'
            style={{
              objectFit: 'cover',
              objectPosition: card.images[3]?.position || 'center center', // Apply position dynamically
            }}
          />
        </div>
      </div>

      {/* Main paragraph */}
      <div>
        <h2>{card.title}</h2>
        <p className='description'>{card.description}</p>
      </div>

      {/* Two-column section below the main paragraph */}
      <div className='FeatureColumn'>
        <div>
          <img 
            className='FeatureImg'
            src={card.images[3]?.src ? card.images[3].src : 'https://picsum.photos/5000/3000'}
            alt={card.title} 
            style={{
              objectFit: 'cover',
              objectPosition: card.images[3]?.position || 'center center', // Apply position dynamically
            }}
          />
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
        {(card.cadFiles || card.AddPhotos || card.extraFiles) && (
          <>
            <h3>Project Files</h3>
            {card.extraFiles && (
              <>
                <h4 className='indented'>Extra Files:</h4>
                <p className='indented'>{parse(card.extraFiles)}</p>
              </>
            )}
            {card.cadFiles && (
              <>
                <h4 className='indented'>Cad Files:</h4>
                <p className='indented'>{card.cadFiles}</p>
              </>
            )}
            {card.AddPhotos && (
              <>
                <h4 className='indented'>Additional Photos:</h4>
                <p className='indented'>{card.AddPhotos}</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
