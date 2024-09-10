import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab'; // Ensure Tab is imported
import LinkTab from "./LinkTab"; // Import LinkTab from the new file

export default function MenuBar() {
  // Initialize state to track the active tab value
  const [value, setValue] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  // Memoize the list of tabs
  const tabList = useMemo(() => [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Racing", to: "/racing" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oliverpilon/" },
    { label: "GitHub", href: "https://github.com/Pilon2020" }  // External link
  ], []);

  // Update the selected tab based on the current path
  useEffect(() => {
    const currentIndex = tabList.findIndex(tab => tab.to === currentPath);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [currentPath, tabList]); // Include tabList in the dependency array

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabsContainer" sx={{ position: 'relative' }}>
      <Box sx={{ 
        display: 'flex',
        alignContent: 'center', 
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          role="navigation"
          sx={{
            '& .MuiTab-root': {
              fontWeight: 'Bold',
              fontSize: '1.75vh',
              textDecoration: 'none', // Ensure no underline
              borderBottom: 'none', // Ensure no underline
              fontFamily:"Isocpeur",
              '&.Mui-selected': {
                color: 'White', // Text color when selected
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Less transparent grey for active tab
              },
            },
            '& .MuiTabs-indicator': {
              display: 'none', // Remove the default underline indicator
            },
          }}
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
                  fontWeight: 'Bold',
                  color: 'White', // Default text color
                  textDecoration: 'none', // Ensure no underline
                  borderBottom: 'none', // Ensure no underline
                }}
              />
            ) : (
              <LinkTab key={index} label={tab.label} to={tab.to}/>
            )
          )}
        </Tabs>


      </Box>

    </Box>
  );
}
