// PostPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutMarkdown from '../components/LayoutMarkdown';
import '../components/detailedproject.css';

const formatDateSlug = isoString => {
  const d    = new Date(isoString);
  const dd   = String(d.getDate()      ).padStart(2, '0');
  const mm   = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};



export default function PostPage() {
    const { slug, dateSlug } = useParams();
    const [md, setMd] = useState('');
    const [modalImage, setModalImage] = useState(null);
    const [groupId, setGroupId] = useState(null);
    const [keyimage, setkeyimage] = useState(null);
    const [postTitle, setPostTitle] = useState('');
    const postBasePath = `/projects_details/${slug}/posts/`;


  useEffect(() => {
    fetch(`/projects_details/${slug}/posts.json`)
        .then(res => {
            if (!res.ok) throw new Error(`Couldn’t load posts for ${slug}`);
            return res.json();
        })
        .then(data => {
            const group = data.find(g =>formatDateSlug(g.date) === dateSlug);
            if (group) {
                setGroupId(group.id); 
                setkeyimage(group.thumbnail); 
                setPostTitle(group.title);
            } else {
                console.warn(`No group with ${group} found`);
            }
        })
      .catch(err => console.error(err));
    }, [slug, dateSlug]);

  useEffect(() => {
    if (!groupId) return;
    fetch(`/projects_details/${slug}/posts/${groupId}.md`)
      .then(r => r.text())
      .then(setMd);
  }, [slug, groupId]);

  return (
    
    <article className="detail-main" style={{ padding: '1rem' }}>
        <h3><a href={`../../${slug}`}> {`< Back To ${slug}`}</a></h3>
        {keyimage && (<img src={`/projects_details/${slug}/media/${keyimage}`} 
                className="detail-hero"
                alt={`${postTitle || slug} highlight`}
                onClick={() => setModalImage(keyimage)}
            />)}
      <h3>{postTitle}</h3>
        <LayoutMarkdown
          markdown={md}
          basePath={postBasePath}
          components={{
            img: ({ style, ...props }) => (
              <img
                {...props}
                style={{
                  display: 'block',
                  margin: '1.5rem auto',
                  maxWidth: '70vw ',
                  width: '100%',
                  height: 'auto',
                  ...style
                }}
              />
            )
          }}
        />

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
    </article>
    
  );
}
