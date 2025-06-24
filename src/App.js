// App.js
import './App.css'; // Ensure App.css is imported
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DetailsPage from './pages/DetailsPage'; // Import the details page
import MenuBar from './components/MenuBar';
import Racing from './pages/Racing';
import Photos from './pages/Photo';

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
            <Route path="/projects/:slug" element={<DetailsPage />} />
            <Route path="/projects/:slug/photos" element={<Photos />} />
            <Route path="/Racing" element={<Racing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;