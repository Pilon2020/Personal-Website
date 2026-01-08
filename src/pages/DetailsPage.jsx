// src/pages/DetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link }           from 'react-router-dom';
import renderLayout                  from '../components/renderLayout';
import DetailedProjectLayout         from '../components/DetailedProjectLayout';
import LayoutMarkdown                from '../components/LayoutMarkdown';

export default function DetailsPage() {
  const { slug } = useParams();
  const [project, setProject]       = useState(null);
  const [descriptionMd, setDescriptionMd] = useState('');
  const [additionalMd,  setAdditionalMd]  = useState('');
  const [docsMd, setDocsMd]         = useState('');
  const [posts, setPosts]           = useState([]);
  const [error, setError]           = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const idxRes = await fetch('/projects_details/index.json');
        if (!idxRes.ok) throw new Error('Index load failed');
        const all = await idxRes.json();
        const p   = all.find(x => x.slug === slug);
        if (!p) throw new Error('Project not found in index');

        if (p.layout === 'detailed') {
          setProject(p);
          const [dRes, postRes] = await Promise.all([
            fetch(`/projects_details/${slug}/docs.md`),
            fetch(`/projects_details/${slug}/posts.json`)
          ]);
          const [dText, postJson] = await Promise.all([
            dRes.ok    ? dRes.text()  : '',
            postRes.ok? postRes.json(): []
          ]);
          setDocsMd(dText);
          setPosts(postJson);
        } else {
          // for basic layout, fetch full project JSON (with features, etc.)
          const detailRes = await fetch(`/projects_details/projects/${slug}.json`);
          const detailData = detailRes.ok
            ? await detailRes.json()
            : {};

          // combine index + detail JSON into project
          const combined = { ...p, ...detailData };
          setProject(combined);

          // fetch description.md and additionalText md
          const [descRes, addRes] = await Promise.all([
            fetch(`/projects_details/descriptions/${combined.description}`),
            fetch(`/projects_details/additional/${combined.additionalText}`)
          ]);
          const [descText, addText] = await Promise.all([
            descRes.ok ? descRes.text() : '',
            addRes.ok  ? addRes.text() : ''
          ]);
          setDescriptionMd(descText);
          setAdditionalMd(addText);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };
    load();
  }, [slug]);

  if (error) {
    return (
      <div>
        <h2>No Project Found</h2>
        <p>We couldn't find the project you're looking for. Please check the URL or go back to the projects page.</p>
        <Link to="/projects">
          <button>Back to Projects</button>
        </Link>
      </div>
    );
  }

  if (!project) {
    return <p>Loading...</p>;
  }

  // detailed large-project view
  if (project.layout === 'detailed') {
    return (
      <DetailedProjectLayout 
        project={project}
        docsMd={docsMd}
        posts={posts}
      />
    );
  }

  // basic small-project view with features now included
  return (
    <div className="markdown-body" style={{ overflowX:'hidden', width:'100%'}}>
      {renderLayout(
        project,
        <LayoutMarkdown markdown={descriptionMd} />,
        <LayoutMarkdown markdown={additionalMd} />
      )}
    </div>
  );
}
