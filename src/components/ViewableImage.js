import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent"; // Ensure the path is correct

const ViewableImage = ({ src, width, maxHeight, style }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="image-container"
        style={{ width, maxHeight, ...style, cursor: 'pointer' }} // Apply width and maxHeight
        onClick={() => setShowModal(true)}
      >
        <img 
          className="responsive-image" 
          src={src} 
          alt="Preview"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure the image fits within the container
          onError={(e) => { 
            console.error(`Failed to load image from ${src}`); 
            e.target.onerror = null; 
            e.target.src = 'https://picsum.photos/200/300'; 
          }}
        />
      </div>

      {showModal &&
        createPortal(
          <ModalContent show={showModal} onClose={() => setShowModal(false)}>
            <div
              className="image-container"
              style={{ maxWidth: '100vw', maxHeight: '100vh', cursor: 'pointer' }} // Adjust modal size as needed
              onClick={() => setShowModal(false)}
            >
              <img 
                className="responsive-image" 
                src={src} 
                alt="Expanded view"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensure full-size modal view
              />
            </div>
          </ModalContent>,
          document.body
        )}
    </>
  );
};

export default ViewableImage;
