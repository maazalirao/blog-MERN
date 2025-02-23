import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  const {
    id,
    title,
    excerpt,
    coverImage,
    author,
    date,
    likes,
    comments,
    tags
  } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Author and Date */}
        <div className="flex items-center mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              {author.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
              <FaHeart className="mr-1" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <FaComment className="mr-1" />
              <span>{comments.length}</span>
            </button>
            <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
              <FaShare className="mr-1" />
            </button>
          </div>

          <Link
            to={`/blog/${id}`}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; 