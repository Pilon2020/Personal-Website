// renderLayout.js
import { Link } from 'react-router-dom';

const renderLayout = (card, descriptionComponent, additionalComponent) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-title-row">
        <Link to="/projects" className="back-link" aria-label="Back to projects">
          <svg
            className="back-link__icon"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M15.5 19.5 8 12l7.5-7.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <h1>{card.title}</h1>
      </div>
      <div>{descriptionComponent}</div>
      <div>{additionalComponent}</div>
    </div>
  );
};

export default renderLayout;
