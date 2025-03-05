import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { useState, useEffect } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {
  const { blogs } = useBlog();
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="home mt-16">
      {/* Modern Hero Section with enhanced styling */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <h1 className="hero-animate opacity-0 text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-indigo-200 text-transparent bg-clip-text">
                Welcome to BlogApp
              </h1>
              <p className="hero-animate opacity-0 text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover amazing stories, share your thoughts, and connect with fellow writers
              </p>
              <div className="hero-animate opacity-0 transform translate-y-4 flex flex-wrap gap-4 justify-center">
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
            </div>
          </div>
        </div>
        {/* Add subtle decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-indigo-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Featured Posts Section */}
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
          
          {/* Featured Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 6).map((blog, index) => (
              <Link key={blog.id || index} to={`/blog/${blog.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img src={blog.image || 'https://via.placeholder.com/400x250'} alt={blog.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800">
                        {getIconForCategory(blog.category)} {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{blog.title}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">{blog.excerpt || blog.content}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img src={blog.author?.avatar || 'https://via.placeholder.com/40'} alt={blog.author?.name} className="w-8 h-8 rounded-full" />
                        <span className="text-sm text-gray-600">{blog.author?.name || 'Anonymous'}</span>
                      </div>
                      <span className="text-sm text-gray-500">{blog.date || '5 min read'}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Tags Section */}
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

      {/* Newsletter Subscription Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on new stories and updates.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-indigo-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Home; 