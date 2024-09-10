import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";

// Function to handle same-page link navigation
function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

// LinkTab component using Tab and Link from react-router-dom
function LinkTab(props) {
  const handleClick = (event) => {
    if (samePageLinkNavigation(event)) {
      // Handle custom logic for the Projects tab
    }
  };

  return (
    <Tab
    component={Link}
    to={props.to} // Ensure "to" prop is passed correctly for routing
    onClick={handleClick}
    aria-current={props.selected ? "page" : undefined}
    sx={{
      color: "White", // Default color for tabs
      textDecoration: 'none', // Remove underline
      borderBottom: 'none', // Remove underline
      "&.Mui-selected": {
        color: "White", // Text color for selected tab
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Less transparent grey for active tab
      },
      borderRadius: "10px",
      ...props.sx, // Allow additional styling via props
    }}
    {...props}
  />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
  to: PropTypes.string.isRequired, // Ensure "to" prop is required
};

export default LinkTab;
