import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData'; // Adjust path if needed
import parse from 'html-react-parser';
import ViewableImage from './ViewableImage';
import ReactMarkdown from 'react-markdown';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index

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

  const handleSlideChange = (index) => {
    if (index < 0) {
      setActiveIndex(items.length - 1);
    } else if (index >= items.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  // Handle thumbnail click to switch carousel image
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="ProjectImgs">
      {/* Top section with two images */}
      <div className="ImgColumns">
        <div className="StackedImg">
          <ViewableImage
            src={card.images[0] ? card.images[0] : 'https://picsum.photos/3000'}
          />
        </div>
      </div>

      <div style={{ clear: 'both' }}>
        <h2>{card.title}</h2>
        <div className="ImageWrap">
          <p className="description">{card.description}</p>
          <img
            className="FeatureImg"
            src={card.images[2] ? card.images[2] : 'https://picsum.photos/5000/3000'}
            alt={card.title}
          />
          <h3>Features:</h3>
          <p className="description">{parse(card.features)}</p>
          <ReactMarkdown className="description">
            {card.additionalText}
          </ReactMarkdown>
        </div>
      </div>

      <div style={{ marginTop: '32px', clear: 'both' }}>
        {card.specifications && (
          <>
            <h3>Technical Specifications:</h3>
            <p>{card.specifications}</p>
          </>
        )}

        {(card.cadFiles || card.images || card.extraFiles) && (
          <>
            <h3>Project Files</h3>
            {card.extraFiles && (
              <>
                <h4 className="indented">Extra Files:</h4>
                <p className="indented">{parse(card.extraFiles)}</p>
              </>
            )}
            {card.cadFiles && (
              <>
                <h4 className="indented">Cad Files:</h4>
                <p className="indented">{card.cadFiles}</p>
              </>
            )}
            {card.images && items.length > 0 && (
              <>
                <h4 className="indented">Photos:</h4>
                <div className="carousel-container">
                  <AliceCarousel
                    items={items}
                    activeIndex={activeIndex} // Bind active index to AliceCarousel
                    autoPlay
                    infinite
                    disableDotsControls
                    disableButtonsControls
                    autoPlayInterval={1000}
                    onSlideChanged={(e) => handleSlideChange(e.item)}
                  />
                </div>

                {/* Thumbnail Preview Gallery */}
                <div className="thumbnail-gallery">
                  {card.images.map((photo, index) => (
                    <img
                      key={index}
                      className={`thumbnail-image ${activeIndex === index ? 'active' : ''}`}
                      src={photo}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => handleThumbnailClick(index)} // Change carousel image on thumbnail click
                      style={{ cursor: 'pointer', width: '100px', margin: '5px', border: activeIndex === index ? '5px solid #007bff' : 'none' }}
                    />
                  ))}
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
