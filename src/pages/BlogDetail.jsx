import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useBlog } from '../context/BlogContext';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { blogs } = useBlog();

  useEffect(() => {
    const foundBlog = blogs.find(blog => blog.id === parseInt(id));
    setBlog(foundBlog);
  }, [id, blogs]);

  if (!blog) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Cover Image */}
          <div className="relative h-96">
            <img 
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center mb-8">
              <img 
                src={blog.authorImage}
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">{blog.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 