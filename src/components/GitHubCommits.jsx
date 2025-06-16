// src/components/GitHubCommits.jsx
import React, { useEffect, useState } from 'react';

export default function GitHubCommits({ owner, repo }) {
  const [commits, setCommits] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`)
      .then(r => r.json())
      .then(arr => Array.isArray(arr) ? setCommits(arr) : setCommits([]))
      .catch(console.error);
  }, [owner, repo]);

  return (
    <ul>
      {commits.map(c=>(
        <li key={c.sha} style={{ marginBottom:'.5rem' }}>
          <a href={c.html_url} target="_blank" rel="noopener">
            {c.commit.message.split('\n')[0]}
          </a><br/>
          <small>{new Date(c.commit.author.date).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  );
}
