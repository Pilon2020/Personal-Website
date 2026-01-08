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
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <h2 className="pagetitle" style={{ margin: 0 }}>
        Projects
      </h2>
      <p style={{ textAlign: "justify", marginBottom: 0}}>
        A mix of shipped work and ongoing experiments (Mostly ongoing experiments and ideas). Click any card for the full story, docs, and build logs.
      </p>

      {/* pinned cards in a simple responsive row */}
      {pinned.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
            alignItems: "stretch",
          }}
        >
          {pinned.map((p, i) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.id}
              style={{ textDecoration: "none" }}
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
