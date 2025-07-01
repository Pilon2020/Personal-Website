import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import InfiniteScroll from 'react-infinite-scroll-component';
import GitHubCommits from './GitHubCommits';
import './detailedproject.css';
import { Link } from 'react-router-dom';



export default function DetailedProjectLayout({ project, docsMd, posts }) {
  const { slug, title, downloads = [], github = {}, photos = []} = project;
  const PAGE_SIZE = 5;
  const [page, setPage] = useState(1);
  const [expandedPost, setExpandedPost] = useState(null);
  const [bodies, setBodies] = useState({});
  const [modalImage, setModalImage] = useState(null);
  const [isScroll, setIsScroll] = useState(false);
  const [docsContent, setDocsContent] = useState(null);
  const [hasDocs, setHasDocs]         = useState(false);
  const [docOpen, setDocOpen] = useState(false);  
  const [keyimage, setkeyimage] = useState(null);


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

  const sortedPosts = React.useMemo(
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
    margin: '10px',
    padding: '1rem',
    paddingBottom: '2rem',
    borderRadius: '8px',
    width: '97%',
    height: 'auto',
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
    <div className="markdown-detailed">
      {/* Sidebar navigation */}
      <aside style={{ position: 'fixed', top: isScroll ? 0 : '100px', left: 0, bottom: 0, 
            width: '5%', padding: '1rem', borderRight: '1px solid #eee', overflowY: 'auto', 
            zIndex: 1000, transition: 'top 0.3s ease-in-out',}}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '10px' }} className='menubar'>
          {hasDocs && (<a href="#docs" onClick={e => { e.preventDefault(); scrollToSection('docs'); }}>Documentation</a>)}
          <a href="#updates" onClick={e => { e.preventDefault(); scrollToSection('updates'); }}>Updates</a>
          {downloads.length > 0 && <a href="#downloads" onClick={e => { e.preventDefault(); scrollToSection('downloads'); }}>Downloads</a>}
          {github.owner && github.repo && <a href="#commits" onClick={e => { e.preventDefault(); scrollToSection('commits'); }}>Commits</a>}
          {photoFiles.length > 0 && <a href="#photos" onClick={e => { e.preventDefault(); scrollToSection('photos'); }}>Photos</a>}
 
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '5%', padding: '1rem' }}>
        {keyimage && (<img src={`/projects_details/${slug}/media/${keyimage}`} 
                      style={{
                        width: '100%',
                        height: '50vh',
                        margin: '0 1rem 1rem 0',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }} onClick={() => setModalImage(keyimage)}
                    />)}
        <h1>{title}</h1>
      {hasDocs && docsContent && (
           <section id="docs" style={{ marginBottom: '2rem' }}>
             <details open={docOpen}>
               <summary style={{ cursor: 'pointer', fontSize: '1.4rem', fontWeight: 'bold' }}>
                 Documentation
               </summary>
               <div style={{ padding: '0.5rem 1rem'}}>
                 <ReactMarkdown remarkPlugins={[remarkGfm]}>
                   {docsContent}
                 </ReactMarkdown>
               </div>
             </details>
           </section>
         )}
        

        {/* Updates */}
        <section id="updates" style={{ marginBottom: '2rem' }}>
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
                <div key={post.id} style={cardStyle}>
                  <div
                    onClick={() => toggleExpand(post.id)}
                    style={{ cursor: 'pointer', color: 'black' }}
                  >

                    {hasImage && (<img src={`/projects_details/${slug}/media/${post.thumbnail}`} alt={post.title} 
                      style={{
                        float: flexDir ? 'left':'right',
                        maxHeight: '100%', 
                        width: '15rem',
                        margin: '0 1rem 0 0',
                        borderRadius: '5px',
                      }}
                    />)}

                    <h3>{post.title}</h3>
                    <small>{new Date(post.date).toLocaleDateString()}</small>

                    {isOpen ? (
                      <>
                        {/* show excerpt first */}
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                          {excerpt}
                        </ReactMarkdown>

                        {/* if it’s actually longer, show Read more */}
                        {isLong && (
                          <div>
                            
                            <Link to={`/projects/${slug}/posts/${dateSlug}`} style={{ marginTop: '1rem', color:'black', alignItems:'flex-end' }}>
                              Read more…
                            </Link>
                          </div>
                        )}
                      </>
                    ) : (
                      // closed state: show the “preview” from post.body
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.body}
                      </ReactMarkdown>
                    )}
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
