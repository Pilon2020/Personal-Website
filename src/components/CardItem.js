import React, { useState } from 'react';

export default function CardItem({
  item,
  index,
  onFocus = () => {},          // default no-op
  onBlur  = () => {},          // default no-op
  focusedCardIndex = null,     // optional
  featured = false
}) {
  const [hovered, setHovered] = useState(false);
  const isFocused = focusedCardIndex === index;
  const rawDescription = item.carddescription || '';
  const firstParagraph = rawDescription
    .split(/\n\s*\n|<br\s*\/?>\s*<br\s*\/?>|<\/p>/i)[0]
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/?p>/gi, '')
    .trim();

  // build the image URL
  const thumb = item.thumbnail
    ? `/projects_details/media/${item.thumbnail}`
    : item.images?.[0] || '';

  // Featured cards get a taller image and more text
  const containerStyle = {
    backgroundColor: hovered || isFocused ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
    borderRadius: '8px',
    boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.35)' : '0 8px 24px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: featured ? '2rem' : '1rem',
    border: isFocused ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.06)',
    height: featured ? '100%' : 'auto',
    transform: hovered || isFocused ? 'translateY(-4px)' : 'none',
    transition: 'transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease, background-color 150ms ease'
  };

  const imgStyle = {
    width: '100%',
    height: featured ? '23vh' : 'auto',   // larger height if featured
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };

  const titleStyle = {
    margin: 0,
    marginBottom: '8px',
    fontSize: featured ? '1.6rem' : '1.15rem',
    color:"#f8fafc",
    letterSpacing: '0.02em'
  };

  const descStyle = {
    margin: 0,
    marginBottom: 'auto',
    color: 'rgba(241,245,249,0.85)',
    fontSize: '1rem'
  };

  const dateStyle = {
    marginTop: '12px',
    fontSize: featured ? '0.95rem' : '0.85rem',
    color: '#94a3b8'
  };

  return (
    <div
      style={containerStyle}
      tabIndex={0}
      role="button"
      onFocus={() => onFocus(index)}
      onBlur={() => onBlur()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setHovered(true)}
      onMouseUp={() => setHovered(false)}
    >
      {thumb && <img src={thumb} alt={item.title} style={imgStyle} />}
      <div style={contentStyle}>
        <h3 style={titleStyle}>{item.title}</h3>
        <p style={descStyle}>{firstParagraph}</p>
        {item.date && <div style={dateStyle}>{item.date}</div>}
      </div>
    </div>
  );
}
