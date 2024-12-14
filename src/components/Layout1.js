import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData';
import parse from 'html-react-parser';
import ViewableImage from './ViewableImage';
import ReactMarkdown from 'react-markdown';

const DetailsPage = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const card = cardData.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>No Project Found</h1>
      </div>
    );
  }

  // Carousel items
  const items = card.images
    ? card.images.map((photo, index) => (
        <div className="carousel-item" key={index}>
          <ViewableImage src={photo} />
        </div>
      ))
    : [];

  return (
    <div>
      <div className="ProjectImgs" >
        <div className='Layout1'>
        {card.images.slice(0, 2).map((image, index) => (
          <ViewableImage
            key={index}
            src={image}
            className="GridImage"
            style={{
              objectFit: 'contain',
              objectPosition: image?.position || 'center',
            }}
          />
        ))}
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
          <ViewableImage
            className='FeatureImg'
            src={card.images[3] ? card.images[3] : 'https://picsum.photos/3000'}
            alt={card.title} 
            style={{
              marginTop: '10px',
              objectFit: 'cover',
              objectPosition: card.images[3]?.position || 'center center', // Apply position dynamically
            }}
          />
        </div>
        <div className='FeatureText'>
        <h3>Features:</h3>
          <ReactMarkdown className="description">{card.features}</ReactMarkdown>
          <ReactMarkdown className="additional">{card.additionalText}</ReactMarkdown>
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
            {card.images && items.length > 0 && (
                <>
                <div>
                <h4 className="indented">Photos:</h4>
                <div>
                <div className="carousel-container">
                    <div className="carousel">
                      {card.images.map((photo, index) => (
                        <img
                          key={index}
                          className="carousel_img"
                          src={photo}
                          alt={`item ${index + 1}`}
                          style={{
                            cursor: 'pointer',
                            width: '100%',
                            margin: '5px',
                            maxHeight: '60vh',
                            objectFit: 'contain',
                            display: index === activeIndex ? 'block' : 'none', // Only display the active image
                          }}
                          onClick={() => setActiveIndex(index)} // Update active image on click
                        />
                      ))}

                      {/* Arrows inside the carousel container */}
                      <a className="prev" onClick={() => setActiveIndex((activeIndex - 1 + card.images.length) % card.images.length)}>&#10094;</a>
                      <a className="next" onClick={() => setActiveIndex((activeIndex + 1) % card.images.length)}>&#10095;</a>
                    </div>

                   {/* Thumbnail Preview Gallery */}
                  </div>
                  <div className="thumbnail-gallery">
                        {card.images.map((photo, index) => (
                          <img
                            key={index}
                            className={activeIndex === index ? 'active' : ''}
                            src={photo}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              cursor: 'pointer',
                              width: '100px',
                              maxHeight: '100px',
                              margin: '5px',
                              objectFit: 'contain',
                              border: activeIndex === index ? '5px solid #007bff' : 'none', // Highlight active thumbnail
                            }}
                            onClick={() => setActiveIndex(index)}
                          />
                      ))}
                    </div>
                </div>
                </div>
                </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
