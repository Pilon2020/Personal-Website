// src/pages/Projects.jsx
import React, { useRef, useEffect, useState } from 'react'
import { Masonry, useContainerPosition }      from 'masonic'
import { Link }                               from 'react-router-dom'
import CardItem                               from '../components/CardItem'
import UnpinnedGrid                           from '../components/unpinnedgrid' 

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects_details/index.json')
      .then(res => {
        if (!res.ok) throw new Error('Couldn’t load project index')
        return res.json()
      })
      .then(data => setProjects(data.filter(p => !p.hidden)))
      .catch(err => console.error(err))
  }, [])

  const pinned   = projects.filter(p => p.pinned)
  const unpinned = projects.filter(p => !p.pinned)

  // renderer for each unpinned card
  const renderUnpinned = ({ data: p, index }) => (
    <Link
      to={`/projects/${p.slug}`}
      key={p.id}
      style={{ textDecoration: 'none' }}
    >
      <CardItem
        item={p}
        index={index + pinned.length} // offset indices if you care
      />
    </Link>
  )
  
    // 1) Attach a ref so we can measure the container’s width
  const containerRef = useRef(null)
  // 2) useContainerPosition gives us containerWidth in px
  const { width: containerWidth = window.innerWidth } =
    useContainerPosition(containerRef)

  // 3) Compute 30vw in px whenever containerWidth changes
  const columnWidth = Math.floor(containerWidth * 0.30)

  return (
    <div style={{ padding: '1rem' }}>
      <h2 className="pagetitle" style={{ margin: '0 0 1rem' }}>
        Projects
      </h2>
      <p style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
        These are the projects I’ve been working on…
      </p>

      {/* --- pinned cards in a simple flex row --- */}
      {pinned.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
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
                featured
              />
            </Link>
          ))}
        </div>
      )}
      {unpinned.length > 0 && (
        <UnpinnedGrid
          items={unpinned}
          render={renderUnpinned}
          vw={0.20}       // 30vw
          gutter={16}     // 16px gap
          overscan={3}    // 5 buffer rows
        />
      )}
    </div>
  )
}
