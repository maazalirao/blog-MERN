import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmartEditor from './components/SmartEditor';
import ContentAnalyzer from './components/ContentAnalyzer';
import TopicGenerator from './components/TopicGenerator';
import { AIProvider } from './context/AIContext';
import './styles/ai-components.css';

const App = () => {
  return (
    <AIProvider>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1>AI-Powered Blog Tool</h1>
          </header>
          <main className="app-main">
            <Routes>
              <Route path="/" element={<SmartEditor />} />
              <Route path="/analyze" element={<ContentAnalyzer />} />
              <Route path="/topics" element={<TopicGenerator />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <p>&copy; 2023 AI Blog Tool. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AIProvider>
  );
};

export default App;
