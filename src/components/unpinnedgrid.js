// src/components/UnpinnedGrid.jsx
import React from "react";
import Masonry from "react-masonry-css";

export default function UnpinnedGrid({
  items,
  render,        // (item, index) => ReactNode
  gap = 10       // gap in px (both directions)
}) {
  const gridStyle = {
    display: "flex",
    marginLeft: `-${gap}px`,
    width: "auto",
  };
  const columnStyle = {
    paddingLeft: `${gap}px`,
    backgroundClip: "padding-box",
  };
  const itemStyle = {
    marginBottom: `${gap}px`,
  };

  return (
    <div style={{ width: "100%" }}>
      <Masonry
        breakpointCols={{ default: 4, 1200: 3, 800: 2, 500: 1 }}
        className="rmc-grid"
        columnClassName="rmc-grid_column"
      >
        {items.map((item, index) => (
          <div key={item.id ?? index} style={itemStyle}>
            {render(item, index)}
          </div>
        ))}
      </Masonry>

      {/* Inline styles for the generated classes (so no external CSS file needed) */}
      <style>{`
        .rmc-grid { ${objToCss(gridStyle)} }
        .rmc-grid_column { ${objToCss(columnStyle)} }
      `}</style>
    </div>
  );
}

// helper to turn a style object into CSS string
function objToCss(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${camelToKebab(k)}:${v}`)
    .join(";");
}
function camelToKebab(s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
