import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import LinkTab from "./LinkTab"; // plain version below
import "./MenuBar.css"; // styles below

export default function MenuBar() {
  const [value, setValue] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState(null);
  const tabsRef = useRef([]);
  const listRef = useRef(null);
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

  useEffect(() => {
    const target = tabsRef.current[value];
    const list = listRef.current;
    if (!target || !list) return;
    const { left: listLeft } = list.getBoundingClientRect();
    const { left, width } = target.getBoundingClientRect();
    setIndicatorStyle({
      width,
      transform: `translateX(${left - listLeft}px)`,
    });
  }, [value, tabList]);

  const handleChange = (newIndex) => setValue(newIndex);

  return (
    <div className="tabsContainer">
      <nav className="tabsNav" role="navigation" aria-label="Main">
        <ul
          className="tabsList"
          role="tablist"
          aria-orientation="horizontal"
          ref={listRef}
        >
          <span
            className="tabIndicator"
            style={indicatorStyle ?? { width: 0, transform: "translateX(0)" }}
          />
          {tabList.map((tab, index) =>
            tab.href ? (
              <li
                key={index}
                role="presentation"
                ref={(el) => (tabsRef.current[index] = el)}
              >
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
              <li
                key={index}
                role="presentation"
                ref={(el) => (tabsRef.current[index] = el)}
              >
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
