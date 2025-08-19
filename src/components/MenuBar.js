import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import LinkTab from "./LinkTab"; // plain version below
import "./MenuBar.css"; // styles below

export default function MenuBar() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  const tabList = useMemo(
    () => [
      { label: "About", to: "/" },
      { label: "Projects", to: "/projects" },
      // { label: "Racing", to: "/racing" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/oliverpilon/" },
      { label: "GitHub", href: "https://github.com/Pilon2020" },
    ],
    []
  );

  useEffect(() => {
    let currentIndex = tabList.findIndex((tab) => tab.to === currentPath);
    if (currentPath.startsWith("/projects")) {
      currentIndex = tabList.findIndex((tab) => tab.to === "/projects");
    }
    if (currentIndex !== -1) setValue(currentIndex);
  }, [currentPath, tabList]);

  const handleChange = (newIndex) => setValue(newIndex);

  return (
    <div className="tabsContainer">
      <nav className="tabsNav" role="navigation" aria-label="Main">
        <ul className="tabsList" role="tablist" aria-orientation="horizontal">
          {tabList.map((tab, index) =>
            tab.href ? (
              <li key={index} role="presentation">
                <a
                  className={`tabItem ${value === index ? "isSelected" : ""}`}
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleChange(value)} // don’t change selected for external
                >
                  {tab.label}
                </a>
              </li>
            ) : (
              <li key={index} role="presentation">
                <LinkTab
                  label={tab.label}
                  to={tab.to}
                  selected={value === index}
                  onSelect={() => handleChange(index)}
                />
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}
