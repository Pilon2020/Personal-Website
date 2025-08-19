// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem";
import UnpinnedGrid from "../components/unpinnedgrid";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects_details/index.json")
      .then((res) => {
        if (!res.ok) throw new Error("Couldn’t load project index");
        return res.json();
      })
      .then((data) => setProjects(data.filter((p) => !p.hidden)))
      .catch((err) => console.error(err));
  }, []);

  const pinned = projects.filter((p) => p.pinned);
  const unpinned = projects.filter((p) => !p.pinned);

  // renderer for each unpinned card (UnpinnedGrid calls render(item, index))
  const renderUnpinned = (p, index) => (
    <Link to={`/projects/${p.slug}`} key={p.id} style={{ textDecoration: "none" }}>
      <CardItem item={p} index={index + pinned.length} />
    </Link>
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="pagetitle" style={{ margin: "0 0 1rem" }}>
        Projects
      </h2>
      <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
        These are the projects I’ve been working on…
      </p>

      {/* pinned cards in a simple responsive row */}
      {pinned.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {pinned.map((p, i) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.id}
              style={{ textDecoration: "none", flex: "1 1 300px" }}
            >
              <CardItem item={p} index={i} featured />
            </Link>
          ))}
        </div>
      )}

      {/* unpinned responsive grid (no masonic) */}
      {unpinned.length > 0 && (
        <UnpinnedGrid
          items={unpinned}
          render={renderUnpinned}
          vw={0.2}     // ~20% of container width per column
          gutter={16}  // 16px gap
        />
      )}
    </div>
  );
}
