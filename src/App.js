import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Racing from './pages/Racing';
import './App.css';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <header className="App-header">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/projects" element={<Projects />} /> {/* Corrected path */}
          <Route path="/racing" element={<Racing />} />
        </Routes>
      </header>
    </Router>
  );
}

export default App;
