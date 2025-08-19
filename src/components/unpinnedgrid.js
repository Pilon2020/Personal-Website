// src/components/UnpinnedGrid.jsx
import React, { useRef, useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export default function UnpinnedGrid({
  items,
  render,        // (item, index) => ReactNode
  vw = 0.20,     // target column width as a fraction of container width
  gap = 10       // gap in px (both directions)
}) {
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [cols, setCols] = useState(3);

  // Observe container size
  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const w = ref.current.offsetWidth || window.innerWidth;
      setContainerWidth(w);
    };
    update();

    let ro;
    if (typeof ResizeObserver !== "undefined" && ref.current) {
      ro = new ResizeObserver(update);
      ro.observe(ref.current);
    } else {
      window.addEventListener("resize", update);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", update);
    };
  }, []);

  // Compute desired column count from vw
  useEffect(() => {
    const desiredColWidth = Math.max(160, Math.floor(containerWidth * vw));
    const count = Math.max(1, Math.floor(containerWidth / (desiredColWidth)));
    setCols(count);
  }, [containerWidth, vw]);

  // react-masonry-css uses classes for spacing; define inline style objects
  const gridStyle = {
    display: "flex",
    marginLeft: `-${gap}px`, // offsets the left padding of columns
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
    <div ref={ref} style={{ width: "100%" }}>
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
