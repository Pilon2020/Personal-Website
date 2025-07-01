// PostPage.jsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
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
    const [keyimage, setkeyimage] = useState([]);
    const [postTitle, setPostTitle] = useState([]);


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
    fetch(`/projects_details/${slug}/posts/${groupId}.md`)
      .then(r => r.text())
      .then(setMd);
  });

  return (
    
    <article style={{ padding: '1rem' }}>
        <h1><a href={`../../${slug}`}> {`< Back To ${slug}`}</a></h1>
        {keyimage && (<img src={`/projects_details/${slug}/media/${keyimage}`} 
                style={{
                width: '100%',
                height: '50vh',
                margin: '0 1rem 1rem 0',
                borderRadius: '8px',
                cursor: 'pointer'
                }} onClick={() => setModalImage(keyimage)}
            />)}
      <h3>{postTitle}</h3>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {md}
        </ReactMarkdown>

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
