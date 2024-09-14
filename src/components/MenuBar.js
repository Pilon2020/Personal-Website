import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import LinkTab from "./LinkTab"; // Import LinkTab from the new file

export default function MenuBar() {
  const [value, setValue] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  const tabList = useMemo(() => [
    { label: "About", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Racing", to: "/racing" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oliverpilon/" },
    { label: "GitHub", href: "https://github.com/Pilon2020" }
  ], []);

  useEffect(() => {
    let currentIndex = tabList.findIndex(tab => tab.to === currentPath);

    if (currentPath.startsWith("/projects")) {
      currentIndex = tabList.findIndex(tab => tab.to === "/projects");
    }

    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [currentPath, tabList]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabsContainer">
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%', // Ensure the container spans full width
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content', // Width based on content (tabs)
        }}>
          <Tabs
            value={value}
            onChange={handleChange}
            role="navigation"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 'Bold',
                fontSize: '1.75vh',
                textDecoration: 'none',
                borderBottom: 'none',
                fontFamily: "Isocpeur",
                color: 'White',
                '&.Mui-selected': {
                  color: 'White',
                  backgroundColor: 'rgba(116, 116, 116, 0.2)',
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {tabList.map((tab, index) =>
              tab.href ? (
                <Tab
                  key={index}
                  label={tab.label}
                  component="a"
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontWeight: 'Bold',
                    color: 'White',
                    textDecoration: 'none',
                    borderBottom: 'none',
                  }}
                  onClick={() => setValue(value)} // Ensure value doesn't change when opening external links
                />
              ) : (
                <LinkTab key={index} label={tab.label} to={tab.to} />
              )
            )}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
