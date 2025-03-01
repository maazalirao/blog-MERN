import { createContext, useState, useContext, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  // In a real app, this would fetch from your backend
  useEffect(() => {
    // Simulated initial data
    setBlogs([
      {
        id: 1,
        title: "Getting Started with React",
        excerpt: "Learn the basics of React and start building awesome applications with modern web development practices...",
        content: "React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll cover everything from components and props to state management and hooks...",
        author: "John Doe",
        date: "2024-03-20",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
        category: "Development",
        readTime: "5 min read"
      },
      // ... other initial blogs
    ]);
  }, []);

  const addBlog = (newBlog) => {
    // In a real app, this would make an API call to save the blog
    const blogToAdd = {
      ...newBlog,
      id: blogs.length + 1,
      date: new Date().toISOString().split('T')[0],
      author: "Current User", // In a real app, this would come from auth
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      readTime: "5 min read"
    };
    
    setBlogs(prevBlogs => [blogToAdd, ...prevBlogs]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export default BlogContext; 