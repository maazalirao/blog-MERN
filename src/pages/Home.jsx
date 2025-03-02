import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { useState, useEffect } from 'react';
import './Home.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {
  const { blogs } = useBlog();
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation effect on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animate hero elements with staggered timing
  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, 300 * index);
    });
  }, []);

  useEffect(() => {
    // Comment out or remove the API call that's causing errors
    /*
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchPosts();
    */
    
    // Instead, just set loading to false since we're using context data
    setLoading(false);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real app, this would call an API to handle the subscription
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  // Get unique categories from blogs
  const categories = [...new Set(blogs.map(blog => blog.category))];
  
  // Icons for categories (in a real app, these would be mapped properly)
  const categoryIcons = {
    'Development': '💻',
    'JavaScript': '📜',
    'React': '⚛️',
    'CSS': '🎨',
    'Web Design': '🌐',
    'Backend': '⚙️',
    'Database': '🗄️',
    'DevOps': '🚀',
    'Mobile': '📱',
    'UI/UX': '✨',
    'Career': '👔',
    'Tutorial': '📚',
  };

  // Default icon if category not found in map
  const getIconForCategory = (category) => {
    return categoryIcons[category] || '📝';
  };
  
  // Popular tags (in a real app, these would be dynamically generated)
  const popularTags = ['React', 'JavaScript', 'Web Development', 'CSS', 'Node.js', 'API', 'Frontend'];

  return (
    <div className="home">
      {/* Enhanced stylish header with improved Tailwind styling */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold flex items-center group">
              <span className="bg-white text-indigo-600 h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-md group-hover:scale-110 transition-transform duration-300">B</span>
              <span className="group-hover:text-blue-200 transition-colors duration-300">BlogApp</span>
            </Link>
            
            {/* Desktop Navigation with enhanced styling */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-1">
                <Link to="/" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">Home</Link>
                <Link to="/write" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">Write</Link>
                <Link to="/about" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">About</Link>
                <Link to="/contact" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">Contact</Link>
              </div>
              
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-white/10 text-white placeholder-white/70 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 w-40 group-hover:w-48 transition-all duration-300"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div className="flex space-x-3">
                <Link to="/login" className="bg-white text-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">Login</Link>
                <Link to="/register" className="bg-indigo-800/30 backdrop-blur-sm text-white border border-white/20 px-5 py-2 rounded-full font-medium hover:bg-indigo-800/50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">Sign Up</Link>
              </div>
            </nav>
            
            {/* Mobile menu button with animation */}
            <button 
              className="md:hidden text-white text-xl p-2 rounded-md hover:bg-white/10 transition-colors duration-300 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes className="transform rotate-90 transition-transform duration-300" /> : <FaBars className="transform transition-transform duration-300" />}
            </button>
          </div>
          
          {/* Mobile Navigation with improved animation and styling */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 flex flex-col space-y-3 animate-fadeIn">
              <Link to="/" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">Home</Link>
              <Link to="/write" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">Write</Link>
              <Link to="/about" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300 font-medium">Contact</Link>
              
              <div className="relative mt-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" />
              </div>
              
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" className="bg-white text-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300 shadow-md text-center">Login</Link>
                <Link to="/register" className="bg-indigo-800/30 backdrop-blur-sm text-white border border-white/20 px-5 py-2 rounded-full font-medium hover:bg-indigo-800/50 transition-colors duration-300 shadow-md text-center">Sign Up</Link>
              </div>
            </nav>
          )}
          
          {/* Decorative elements for the header */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
        </div>
      </header>

      {/* Add animation for mobile menu */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Modern Hero Section with enhanced styling */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
        {/* Abstract geometric shapes for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-400 filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-400 filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Animated code pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"50\" height=\"50\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23ffffff\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-28 md:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left side content */}
            <div className="lg:w-3/5 space-y-8">
              <div className="space-y-6">
                <span className="hero-animate opacity-0 inline-block bg-blue-500/30 backdrop-blur-sm text-blue-100 font-semibold px-4 py-2 rounded-full text-sm border border-blue-400/20 transform translate-y-4">Your Space to Share Knowledge</span>
                
                <h1 className="hero-animate opacity-0 transform translate-y-4 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block mb-2">Share Your</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">Story Today</span>
                </h1>
                
                <p className="hero-animate opacity-0 transform translate-y-4 text-xl md:text-2xl text-blue-100/90 max-w-3xl leading-relaxed">
                  Create, share, and discover amazing stories. Join our community of writers and readers passionate about sharing knowledge.
                </p>
              </div>
              
              <div className="hero-animate opacity-0 transform translate-y-4 flex flex-wrap gap-4 pt-4">
                <Link to="/write" className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-2xl">
                  <span className="relative z-10">Write a Post</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300 delay-100"></span>
                </Link>
                <Link to="/explore" className="relative rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/20">
                  Explore Articles
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              
              <div className="hero-animate opacity-0 transform translate-y-4 flex flex-col sm:flex-row items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt="Community member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-blue-100 text-sm">
                  <span className="font-semibold">Join 4,000+ writers</span> already sharing stories
                </div>
              </div>
            </div>
            
            {/* Right side floating card */}
            <div className="hero-animate opacity-0 transform translate-y-4 lg:w-2/5 flex-shrink-0 relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl shadow-blue-500/10 p-6 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full filter blur-3xl opacity-50"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl">
                      ✍️
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Featured Stories</h3>
                      <p className="text-blue-100/70 text-sm">Hot off the press</p>
                    </div>
                  </div>
                  
                  {blogs.slice(0, 2).map((blog, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/${blog.id}`}
                      className="block mb-5 last:mb-0 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10"
                    >
                      <div className="flex items-start gap-3">
                        <img 
                          src={blog.authorImage || `https://randomuser.me/api/portraits/men/${25 + index}.jpg`}
                          alt={blog.author}
                          className="w-10 h-10 rounded-full flex-shrink-0 object-cover border-2 border-indigo-900"
                        />
                        <div>
                          <h4 className="font-medium text-white line-clamp-2">{blog.title}</h4>
                          <div className="mt-2 flex items-center gap-3 text-xs text-blue-100/70">
                            <span>{blog.author}</span>
                            <span className="h-1 w-1 rounded-full bg-blue-300"></span>
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <Link 
                      to="/explore" 
                      className="flex items-center justify-center w-full text-center text-blue-100 hover:text-white text-sm font-medium transition-colors duration-300"
                    >
                      View All Articles
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Add CSS for hero animations */}
      <style jsx>{`
        .hero-animate {
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .hero-animate.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      {/* Search Section with improved styling */}
      <div className="bg-white shadow-lg py-8 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 relative">
              Find the content you need
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></div>
            </h2>
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full py-4 px-6 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section with beautiful styling */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover articles across various technology domains and find exactly what you're looking for</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const blogCount = blogs.filter(blog => blog.category === category).length;
            return (
              <Link 
                key={index} 
                to={`/explore?category=${category}`}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-indigo-700/80 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                <div className="relative p-8 flex flex-col items-center h-full text-center">
                  <div className="text-4xl mb-4">{getIconForCategory(category)}</div>
                  <h3 className="font-bold text-xl text-white mb-2">{category}</h3>
                  <p className="text-sm text-white/80 font-medium">
                    {blogCount} article{blogCount !== 1 ? 's' : ''}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Featured Posts with subtle improvements */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Posts</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
            </div>
            <Link to="/explore" className="text-blue-500 hover:text-blue-600 font-medium group flex items-center">
              View All Posts 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link 
                to={`/blog/${blog.id}`} 
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 flex-1">{blog.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{blog.author}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{new Date(blog.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                          <span className="mx-2">•</span>
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Tags Section with improved visuals */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Tags</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Browse content by specific topics that interest you</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <Link
                key={index}
                to={`/explore?tag=${tag}`}
                className="bg-gray-50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 text-gray-700 hover:text-white px-5 py-3 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:shadow-md"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription with elegant styling */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 skew-y-1"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay in the Loop</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive new posts, updates, and special offers directly in your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="px-5 py-4 rounded-lg text-gray-900 w-full sm:w-auto sm:flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-200 shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-6">
                No spam ever, we value your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 