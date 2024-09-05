import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className="App-header">
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;