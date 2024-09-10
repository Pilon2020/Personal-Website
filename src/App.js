// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Racing from './pages/Racing';
import DetailsPage from './pages/DetailsPage'; // Import the details page
import './App.css'; // Ensure App.css is imported
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <MenuBar />
        </header>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/projects" element={<Projects />} /> {/* Projects page */}
            <Route path="/projects/:id" element={<DetailsPage />} /> {/* Dynamic project details */}
            <Route path="/racing" element={<Racing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
