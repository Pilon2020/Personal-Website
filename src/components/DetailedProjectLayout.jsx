import React, { useState, useEffect, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GitHubCommits from './GitHubCommits';
import './detailedproject.css';
import { Link } from 'react-router-dom';
import LayoutMarkdown from './LayoutMarkdown';



export default function DetailedProjectLayout({ project, docsMd, posts }) {
  const { slug, title, downloads = [], github = {}, photos = []} = project;
  const PAGE_SIZE = 5;
  const [page, setPage] = useState(1);
  const [expandedPost, setExpandedPost] = useState(null);
  const [bodies, setBodies] = useState({});
  const [modalImage, setModalImage] = useState(null);
  const [docsContent, setDocsContent] = useState(null);
  const [hasDocs, setHasDocs]         = useState(false);
  const [docOpen, setDocOpen] = useState(false);  
  const [keyimage, setkeyimage] = useState(null);

  const postBasePath = `/projects_details/${slug}/posts/`;
  const docsBasePath = `/projects_details/${slug}/`;


  useEffect(() => {
    fetch(`/projects_details/${slug}/${slug}.json`)
      .then(res => {
        if (!res.ok) throw new Error('no slug json');
        return res.json();
      })
      .then(data => {
        setDocOpen(Boolean(data.docOpen));
        setkeyimage(data.imagehighlight);
      })
      .catch(() => {
        setDocOpen(false);
        setkeyimage(null);
      });
  }, [slug]);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => b.id - a.id),
    [posts]
  );

  // Paginate posts
  const visiblePosts = sortedPosts.slice(0, page * PAGE_SIZE);
  const hasMore      = visiblePosts.length < sortedPosts.length;

  // Determine photo files for carousel
  const photoFiles = photos.length > 0
    ? photos
    : posts.filter(p => p.thumbnail).map(p => p.thumbnail);

  // Determine if there is a Doc.md file
  useEffect(() => {
    const url = `/projects_details/${slug}/docs.md`;
    fetch(url, { method: 'GET' })
    .then(res => {
      const ct = res.headers.get('Content-Type') || '';
      if (!res.ok || ct.includes('text/html')) {
        throw new Error('no docs');
      }
      setHasDocs(true);
      return res.text();
      })
      .then(markdown => setDocsContent(markdown))
      .catch(() => {
      setHasDocs(false);
      setDocsContent(null);
        });
  }, [slug]);

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

  const getExcerpt = (md, maxParas = 3) => {
    const paras = md.split(/\n\s*\n/).filter(p => p.trim() !== '');
    if (paras.length <= maxParas) return { excerpt: md, isLong: false };
    return {
      excerpt: paras.slice(0, maxParas).join('\n\n'),
      isLong: true
    };
  };

  const formatDateSlug = isoString => {
    const d = new Date(isoString);
    const dd    = String(d.getDate()       ).padStart(2, '0');
    const mm    = String(d.getMonth() + 1  ).padStart(2, '0');
    const yyyy  = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  

  return (
    <div className="markdown-detailed detailed-layout">
      {/* Sidebar navigation */}
      <aside className="detail-aside">
        <nav className="detail-nav menubar" aria-label="Project sections">
          {hasDocs && (<a href="#docs" onClick={e => { e.preventDefault(); scrollToSection('docs'); }}>Documentation</a>)}
          <a href="#updates" onClick={e => { e.preventDefault(); scrollToSection('updates'); }}>Updates</a>
          {downloads.length > 0 && <a href="#downloads" onClick={e => { e.preventDefault(); scrollToSection('downloads'); }}>Downloads</a>}
          {github.owner && github.repo && <a href="#commits" onClick={e => { e.preventDefault(); scrollToSection('commits'); }}>Commits</a>}
          {photoFiles.length > 0 && <a href="#photos" onClick={e => { e.preventDefault(); scrollToSection('photos'); }}>Photos</a>}
        </nav>
      </aside>

      {/* Main content */}
      <main className="detail-main">
        {keyimage && (<img src={`/projects_details/${slug}/media/${keyimage}`} 
                      className="detail-hero"
                      alt={`${title} highlight`}
                      onClick={() => setModalImage(keyimage)}
                    />)}
        <h1>{title}</h1>
      {hasDocs && docsContent && (
           <section id="docs" className="detail-section">
             <details open={docOpen} className="detail-accordion">
             <summary>
               Documentation
             </summary>
             <div>
                <LayoutMarkdown markdown={docsContent} basePath={docsBasePath} />
              </div>
            </details>
          </section>
        )}


        {/* Updates */}
        <section id="updates" className="detail-section">
          <h2>Updates</h2>
          <InfiniteScroll dataLength={visiblePosts.length} next={() => setPage(p => p + 1)} hasMore={hasMore} loader={<p>Loading more updates…</p>}>

            {visiblePosts.map((post, idx) => {
              const isOpen    = expandedPost === post.id;
              const fullMd    = bodies[post.id] || post.body;
              const { excerpt, isLong } = getExcerpt(fullMd, 3);
              const hasImage  = Boolean(post.thumbnail);
              const flexDir   = hasImage && idx % 2 === 0;
              const dateSlug = formatDateSlug(post.date);

              return (
                <div key={post.id} className="post-card">
                  <div
                    onClick={() => toggleExpand(post.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {hasImage && (<img
                      src={`/projects_details/${slug}/media/${post.thumbnail}`}
                      alt={post.title}
                      className="post-thumbnail"
                      style={{ float: flexDir ? 'left' : 'right' }} // keep dynamic float inline
                    />)}

                    <h3>{post.title}</h3>
                    <small>{new Date(post.date).toLocaleDateString()}</small>

                    {isOpen ? (
                      <>
                        {/* show excerpt first */}
                        <LayoutMarkdown markdown={excerpt} basePath={postBasePath} />

                        {/* if it’s actually longer, show Read more */}
                        {isLong && (
                          <div>
                            <Link to={`/projects/${slug}/posts/${dateSlug}`} className="read-more-link">
                              Read more…
                            </Link>
                          </div>
                        )}
                      </>
                    ) : (
                      // closed state: show the “preview” from post.body
                      <LayoutMarkdown markdown={post.body} basePath={postBasePath} />
                    )}
                  </div>
                </div>
              );
            })}

          </InfiniteScroll>
        </section>

        {/* Downloads */}
        {downloads.length > 0 && (
          <section id="downloads" className="detail-section">
            <h2>Downloads</h2>
            <ul>{downloads.map(file => <li key={file.url}><a href={file.url} download>{file.name}</a></li>)}</ul>
          </section>
        )}

        {/* Commits */}
        {github.owner && github.repo && (
          <section id="commits" className="detail-section">
            <h2>Recent Commits</h2>
            <GitHubCommits owner={github.owner} repo={github.repo} />
          </section>
        )}

        {/* Photos with click-to-open modal */}
        {photoFiles.length > 0 && (
          <section id="photos" className="detail-section">
            <h2>Photos</h2>
            <div className="detail-photo-grid">
              {photoFiles.map((file, idx) => (
                <img
                  key={idx}
                  src={`/projects_details/${slug}/media/${file}`}
                  alt={`photo-${idx}`}
                  className="detail-photo-thumb"
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
