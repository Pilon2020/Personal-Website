import React, { useEffect, useState } from 'react';
import { useParams }             from 'react-router-dom';
import BaseProjectLayout         from '../components/BaseProjectLayout';
import DetailedProjectLayout     from '../components/DetailedProjectLayout';

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    fetch('/projects_details/index.json')
      .then(r => r.json())
      .then(list => setProject(list.find(p => p.slug === slug)))
      .catch(console.error);
  }, [slug]);

  if (!project) return <div>Loading…</div>;

  return project.layout === 'detailed'
    ? <DetailedProjectLayout project={project}/>
    : <BaseProjectLayout     project={project}/>;
}
