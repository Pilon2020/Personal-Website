// LinkTab.jsx (no MUI)
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Handle same-page left-click only (no meta/ctrl/alt/shift, no middle/right click)
function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function LinkTab({
  to,
  selected = false,
  onSelect,
  className = "",
  style,
  children,
  label,           // keep compatibility with your previous usage
  ...rest
}) {
  const handleClick = (event) => {
    if (samePageLinkNavigation(event)) {
      // If parent passed an onSelect (e.g., to set the active index), call it
      if (onSelect) onSelect();
    }
  };

  const baseClass = "tabItem";
  const selectedClass = selected ? " isSelected" : "";
  const combinedClass = `${baseClass}${selectedClass}${className ? " " + className : ""}`;

  return (
    <Link
      to={to}
      role="tab"
      aria-selected={selected}
      aria-current={selected ? "page" : undefined}
      className={combinedClass}
      style={style}
      onClick={handleClick}
      {...rest}
    >
      {children ?? label}
    </Link>
  );
}

LinkTab.propTypes = {
  to: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  label: PropTypes.node
};
