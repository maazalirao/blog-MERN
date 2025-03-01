import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Write from './pages/Write';
import About from './pages/About';
import Explore from './pages/Explore';
import './App.css';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
