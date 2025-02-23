import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(true);

  // Simulated tags - replace with actual tags from your backend
  const tags = ['Technology', 'Travel', 'Food', 'Lifestyle', 'Health', 'Business'];

  useEffect(() => {
    // Simulated API call - replace with your actual API endpoint
    const fetchBlogs = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || blog.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
    setFilteredBlogs(filtered);
  }, [searchTerm, selectedTag, blogs]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${!selectedTag 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          >
            All
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${selectedTag === tag 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
        </div>
      ) : filteredBlogs.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600 dark:text-gray-400">
            No blogs found matching your criteria
          </h3>
        </div>
      )}
    </div>
  );
};

export default BlogList; 