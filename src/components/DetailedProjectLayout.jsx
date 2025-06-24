import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import InfiniteScroll from 'react-infinite-scroll-component';
import GitHubCommits from './GitHubCommits';

export default function DetailedProjectLayout({ project, docsMd, posts }) {
  const { slug, title, downloads = [], github = {}, photos = [] } = project;
  const PAGE_SIZE = 5;
  const [page, setPage] = useState(1);
  const [expandedPost, setExpandedPost] = useState(null);
  const [bodies, setBodies] = useState({});
  const [modalImage, setModalImage] = useState(null);
  const [isScroll, setIsScroll] = useState(false);

  // Paginate posts
  const visiblePosts = posts.slice(0, page * PAGE_SIZE);
  const hasMore = visiblePosts.length < posts.length;

  // Determine photo files for carousel
  const photoFiles = photos.length > 0
    ? photos
    : posts.filter(p => p.thumbnail).map(p => p.thumbnail);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY >= 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch expanded post bodies
  useEffect(() => {
    if (expandedPost != null && !bodies[expandedPost]) {
      fetch(`/projects_details/${slug}/posts/${expandedPost}.md`)
        .then(res => res.text())
        .then(text => setBodies(prev => ({ ...prev, [expandedPost]: text })));
    }
  }, [expandedPost, slug, bodies]);

  // Toggle expand/collapse of a single post
  const toggleExpand = id => setExpandedPost(prev => (prev === id ? null : id));

  // Smooth scroll helper
  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const cardStyle = {
    backgroundColor: 'lightgrey',
    margin: '10px auto',
    padding: '1rem',
    borderRadius: '8px',
    width: '97%',
  };

  return (
    <div className="markdown-detailed">
      {/* Sidebar navigation */}
      <aside style={{ position: 'fixed', top: isScroll ? 0 : '100px', left: 0, bottom: 0, 
            width: '5%', padding: '1rem', borderRight: '1px solid #eee', overflowY: 'auto', 
            zIndex: 1000, transition: 'top 0.3s ease-in-out',}}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '10px' }}>
          {docsMd && <a href="#docs" onClick={e => { e.preventDefault(); scrollToSection('docs'); }}>Documentation</a>}
          <a href="#updates" onClick={e => { e.preventDefault(); scrollToSection('updates'); }}>Updates</a>
          {downloads.length > 0 && <a href="#downloads" onClick={e => { e.preventDefault(); scrollToSection('downloads'); }}>Downloads</a>}
          {github.owner && github.repo && <a href="#commits" onClick={e => { e.preventDefault(); scrollToSection('commits'); }}>Commits</a>}
          {photoFiles.length > 0 && <a href="#photos" onClick={e => { e.preventDefault(); scrollToSection('photos'); }}>Photos</a>}
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '5%', padding: '1rem' }}>
        <h1>{title}</h1>

        {/* Documentation */}
        {docsMd && (
          <section id="docs" style={{ marginBottom: '2rem' }}>
            <details>
              <summary style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: 'bold' }}>Documentation</summary>
              <div style={{ padding: '0.5rem 1rem' }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{docsMd}</ReactMarkdown>
              </div>
            </details>
          </section>
        )}

        {/* Updates */}
        <section id="updates" style={{ marginBottom: '2rem' }}>
          <h2>Updates</h2>
          <InfiniteScroll dataLength={visiblePosts.length} next={() => setPage(p => p + 1)} hasMore={hasMore} loader={<p>Loading more updates…</p>}>
            {visiblePosts.map((post, idx) => {
              const hasImage = Boolean(post.thumbnail);
              const flexDirection = hasImage && idx % 2 === 0 ? 'row' : 'row-reverse';
              return (
                <div key={post.id} style={cardStyle}>
                  <div onClick={() => toggleExpand(post.id)} style={{cursor: 'pointer', display: 'flex', flexDirection, gap: '1rem', alignItems: 'flex-start', color: 'black' }}>
                    {hasImage && <img src={`/projects_details/${slug}/media/${post.thumbnail}`} alt={post.title} style={{ width: '15rem', borderRadius: '5px' }} />}
                    <div style={{ flex: 1 }}>
                      <h3 style={{margin: 0 }}>{post.title}</h3>
                      <small>{new Date(post.date).toLocaleDateString()}</small>
                      {expandedPost === post.id ? (
                        bodies[post.id] ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{bodies[post.id]}</ReactMarkdown> : <p>Loading...</p>
                      ) : <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>}
                      {expandedPost === post.id && post.attachments && (
                        <ul>{post.attachments.map(a => <li key={a.url}><a href={a.url.replace('<slug>', slug)} download>{a.name}</a></li>)}</ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </section>

        {/* Downloads */}
        {downloads.length > 0 && (
          <section id="downloads" style={{ marginBottom: '2rem' }}>
            <h2>Downloads</h2>
            <ul>{downloads.map(file => <li key={file.url}><a href={file.url} download>{file.name}</a></li>)}</ul>
          </section>
        )}

        {/* Commits */}
        {github.owner && github.repo && (
          <section id="commits" style={{ marginBottom: '2rem' }}>
            <h2>Recent Commits</h2>
            <GitHubCommits owner={github.owner} repo={github.repo} />
          </section>
        )}

        {/* Photos with click-to-open modal */}
        {photoFiles.length > 0 && (
          <section id="photos" style={{ marginTop: '2rem' }}>
            <h2>Photos</h2>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', padding: '1rem 0' }}>
              {photoFiles.map((file, idx) => (
                <img
                  key={idx}
                  src={`/projects_details/${slug}/media/${file}`}
                  alt={`photo-${idx}`}
                  style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
                  onClick={() => setModalImage(file)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Modal Overlay */}
        {modalImage && (
          <div
            onClick={() => setModalImage(null)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000,
            }}
          >
            <img
              src={`/projects_details/${slug}/media/${modalImage}`}
              alt="Modal"
              style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
            />
          </div>
        )}
      </main>
    </div>
  );
}
