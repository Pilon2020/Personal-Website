// src/pages/Photos.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';

export default function Photos() {
  const { slug } = useParams();

  return (
    <div>
      <GalleryGrid slug={slug} />
    </div>
  );
}
