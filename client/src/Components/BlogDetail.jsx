import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const shareUrl = window.location.href;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        setComments(data.comments || []);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleLike = async () => {
    try {
      // Replace with your API endpoint
      await fetch(`/api/blogs/${id}/like`, {
        method: 'POST',
      });
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/blogs/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: comment }),
      });
      const newComment = await response.json();
      setComments([...comments, newComment]);
      setComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Blog not found</h2>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      {/* Cover Image */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Meta */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {blog.title}
        </h1>
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{blog.author.name}</p>
            <p className="text-sm">
              {new Date(blog.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Engagement Section */}
      <div className="flex items-center justify-between border-t border-b border-gray-200 dark:border-gray-800 py-4 mb-8">
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
          >
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            <span>{blog.likes + (liked ? 1 : 0)}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <FaComment />
            <span>{comments.length}</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={blog.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Comments ({comments.length})
        </h3>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent"
            rows="3"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Post Comment
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {comment.author.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(comment.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogDetail; 