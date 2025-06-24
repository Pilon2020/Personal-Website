// src/components/GalleryGrid.jsx
import React, { useState, useEffect } from 'react';
import './GalleryGrid.css';

export default function GalleryGrid({ slug }) {
  const [images, setImages] = useState(null);
  const [ProjectName, setProjectName] = useState('');

  useEffect(() => {
    fetch(`/projects_details/projects/${slug}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Manifest not found');
        return res.json();                     
      })
      .then(proj => {
        setProjectName(proj.title);
        const formatted = proj.images.map(item => ({
          src: `/projects_details/media/${slug}/${item.filename}`,
          alt: item.alt || `${slug} photo`,
          caption: item.caption || ''
        }));
        setImages(formatted);
      })
      .catch(err => {
        console.error(err);
        setImages([]);                         
      });
  }, [slug]);

  if (images === null) {
    return <p>Loading photos…</p>;
  }
  if (images.length === 0) {
    return <p>No photos found for “{slug}”.</p>;
  }

  return (
    <div>
    <h1>{ProjectName}</h1>
    <div className="gallery-grid">
      {images.map(({ src, alt, caption }, i) => (
        <figure key={i} className="gallery-item">
          <img src={src} alt={alt} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      ))}
    </div>
    </div>
  );
}
