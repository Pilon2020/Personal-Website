import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import LinkTab from "./LinkTab"; // Import LinkTab from the new file

export default function MenuBar() {
  // Initialize state to track the active tab value
  const [value, setValue] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  // Define a dynamic list of tabs
  const tabList = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Racing", to: "/racing" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oliverpilon/" },
    { label: "GitHub", href: "https://github.com/Pilon2020" }  // External link
  ];

  // Update the selected tab based on the current path
  useEffect(() => {
    const currentIndex = tabList.findIndex(tab => tab.to === currentPath);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [currentPath]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabsContainer">
      <Tabs
        value={value}
        onChange={handleChange}
        role="navigation"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#bf00ff", // Customize the underline color
          },
        }}
        className="tabsBorder tabsBackground" // Apply CSS classes for Tabs container
      >
        {tabList.map((tab, index) => 
          tab.href ? (
            <Tab
              key={index}
              label={tab.label}
              component="a"
              href={tab.href} // External link handling
              target="_blank" // Open external link in a new tab
              rel="noopener noreferrer"
              sx={{
                color: "White", // Default color
                "&.Mui-selected": {
                  color: "white", // Text color when selected
                }
              }}
            />
          ) : (
            <LinkTab key={index} label={tab.label} to={tab.to} />
          )
        )}
      </Tabs>
    </Box>
  );
}
