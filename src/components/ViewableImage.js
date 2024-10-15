import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent"; // Ensure the path is correct

const ViewableImage = ({ src, className, width, maxHeight, style }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`image-container ${className}`} // Apply className directly
        style={{ width: '100%', maxHeight: '100%', ...style, cursor: 'pointer' }} // Ensure the container fits
        onClick={() => setShowModal(true)}
      >
        <img 
          className="responsive-image" 
          src={src} 
          alt="Preview"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensure image is contained within the container
          onError={(e) => { 
            console.error(`Failed to load image from ${src}`); 
            e.target.onerror = null; 
            e.target.src = 'https://picsum.photos/200/300'; // Fallback image
          }}
        />
      </div>

      {showModal &&
        createPortal(
          <ModalContent show={showModal} onClose={() => setShowModal(false)}>
            <div
              className="image-container"
              style={{ maxWidth: '100vw', maxHeight: '100vh', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Center image in modal
              onClick={() => setShowModal(false)}
            >
              <img 
                className="responsive-image" 
                src={src} 
                alt="Expanded view"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} // Ensure image is centered and contained in modal
              />
            </div>
          </ModalContent>,
          document.body
        )}
    </>
  );
};

export default ViewableImage;
