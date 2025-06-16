import React, { useState } from 'react';

export default function CardItem({
  item,
  index,
  onFocus,
  onBlur,
  focusedCardIndex,
  featured = false       // new flag
}) {
  const [hovered, setHovered] = useState(false);
  const isFocused = focusedCardIndex === index;

  // build the image URL
  const thumb = item.thumbnail
    ? `/projects_details/media/${item.thumbnail}`
    : item.images?.[0] || '';

  // Featured cards get a taller image and more text
  const containerStyle = {
    backgroundColor: hovered || isFocused ? '#f5f5f5' : '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: featured ? '2rem' : '1rem',
    border: isFocused ? '2px solid #007aff' : '2px solid transparent',
    height: featured ? '40vh' : 'auto'
  };

  const imgStyle = {
    width: '100%',
    height: featured ? '23vh' : 'auto',   // larger height if featured
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    margin: 0,
    marginBottom: '8px',
    fontSize: featured ? '1.8rem' : '1.2rem',
    color:"black"
  };

  const descStyle = {
    margin: 0,
    marginBottom: 'auto',
    color: '#555'
  };

  const dateStyle = {
    marginTop: '12px',
    fontSize: featured ? '0.9rem' : '0.8rem',
    color: '#888'
  };

  const featuredTextStyle = {
    marginTop: '12px',
    fontSize: '1rem',
    color: '#333'
  };

  return (
    <div
      style={containerStyle}
      tabIndex={0}
      role="button"
      onFocus={() => onFocus(index)}
      onBlur={onBlur}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {thumb && <img src={thumb} alt={item.title} style={imgStyle} />}
      <div style={contentStyle}>
        <h3 style={titleStyle}>{item.title}</h3>
        <p style={descStyle}>{item.carddescription}</p>
        {featured && item.featuredText && (
          <p style={featuredTextStyle}>{item.featuredText}</p>
        )}
        {item.date && <div style={dateStyle}>{item.date}</div>}
      </div>
    </div>
  );
}
