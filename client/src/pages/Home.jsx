import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const { blogs } = useBlog();
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on page load
  useEffect(() => {
    setIsVisible(true);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with enhanced styling */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Developer's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
              Your source for in-depth technical articles, programming tutorials, and development insights from industry experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/write" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Write a Post
              </Link>
              <Link to="/explore" className="bg-transparent border-2 border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                Explore Articles
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072"
              alt="Blog Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"></div>
          </div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </div>

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