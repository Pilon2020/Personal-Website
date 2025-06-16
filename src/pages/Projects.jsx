// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import CardItem from '../components/CardItem';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [focusedCardIndex, setFocusedCardIndex] = useState(null);

  useEffect(() => {
    fetch('/projects_details/index.json')
      .then(res => {
        if (!res.ok) throw new Error('Couldn’t load project index');
        return res.json();
      })
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  const handleFocus = i => setFocusedCardIndex(i);
  const handleBlur  = () => setFocusedCardIndex(null);

  // Split out pinned vs the rest
  const pinned = projects.filter(p => p.pinned);
  const others = projects.filter(p => !p.pinned);

  const cols = { default: 4, 1200: 3, 900: 2, 600: 1 };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 className="pagetitle" style={{ margin: 0 }}>Projects</h2>
      <p style={{ textAlign: 'justify', padding: '5px' }}>
        These are the projects I have been working on. Most of these projects are on going as I tend to hop around from project to project, working on each of them and updating them as I think of new ways to improve or expand on what I have already done.
      </p>

      {/* Pinned side-by-side */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {pinned.map((p, i) => (
          <Link
            to={`/projects/${p.slug}`}
            key={p.id}
            style={{ textDecoration: 'none', flex: '1 1 300px' }}
          >
            <CardItem
              item={p}
              index={i}
              onFocus={() => handleFocus(i)}
              onBlur={handleBlur}
              focusedCardIndex={focusedCardIndex}
              featured
            />
          </Link>
        ))}
      </div>

      {/* --- Masonry Section for the rest --- */}
      <div style={{ width: '100%', minHeight: '500px' }}>
        <Masonry
          breakpointCols={cols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {others.map((p, i) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.id}
              style={{ textDecoration: 'none' }}
            >
              <CardItem
                item={p}
                index={i + pinned.length}       // offset index if you like
                onFocus={() => handleFocus(i + pinned.length)}
                onBlur={handleBlur}
                focusedCardIndex={focusedCardIndex}
              />
            </Link>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
