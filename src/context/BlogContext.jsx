import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const BlogContext = createContext();

// Custom hook to use the blog context
export const useBlog = () => useContext(BlogContext);

// Provider component
export const BlogProvider = ({ children }) => {
  // Sample pre-built blog data
  const initialBlogs = [
    {
      id: 1,
      title: "The Art of Storytelling in Modern Media",
      excerpt: "Discover how storytelling techniques have evolved in the digital age and how you can apply them to your content.",
      content: "Storytelling is as old as humanity itself, but the mediums through which we tell stories have evolved dramatically...",
      author: "Emma Johnson",
      authorImage: "https://randomuser.me/api/portraits/women/12.jpg",
      date: "2023-10-15",
      readTime: "5 min read",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["storytelling", "content creation", "writing tips"]
    },
    {
      id: 2,
      title: "Finding Your Voice as a Writer",
      excerpt: "Learn how to develop your unique writing style and connect with your audience on a deeper level.",
      content: "Every writer has a unique voice, but finding it can be a journey of self-discovery and practice...",
      author: "Marcus Chen",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2023-10-10",
      readTime: "7 min read",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["writing", "creativity", "self-expression"]
    },
    {
      id: 3,
      title: "The Psychology of Color in Visual Storytelling",
      excerpt: "Explore how color choices impact audience perception and emotional response in visual media.",
      content: "Colors are more than just visual elements; they're powerful psychological triggers that can influence mood, attention, and even decision-making...",
      author: "Sophia Rodriguez",
      authorImage: "https://randomuser.me/api/portraits/women/23.jpg",
      date: "2023-10-05",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["design", "psychology", "visual storytelling"]
    },
    {
      id: 4,
      title: "Building a Personal Brand Through Blogging",
      excerpt: "Strategies to establish yourself as an authority in your niche and grow your audience organically.",
      content: "In today's digital landscape, a strong personal brand can open doors to opportunities you never imagined possible...",
      author: "James Wilson",
      authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "2023-09-28",
      readTime: "8 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["personal branding", "blogging", "career growth"]
    },
    {
      id: 5,
      title: "The Power of Vulnerability in Personal Essays",
      excerpt: "Why sharing your authentic experiences can create deeper connections with your readers.",
      content: "Vulnerability isn't weakness—it's the courage to show up and be seen when there are no guarantees...",
      author: "Olivia Kim",
      authorImage: "https://randomuser.me/api/portraits/women/35.jpg",
      date: "2023-09-22",
      readTime: "5 min read",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["personal essays", "vulnerability", "authentic writing"]
    },
    {
      id: 6,
      title: "Mastering the Art of Food Photography",
      excerpt: "Tips and techniques to capture mouthwatering food images that tell a story.",
      content: "Food photography is about more than just documenting a dish—it's about evoking emotion and creating desire...",
      author: "David Patel",
      authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "2023-09-18",
      readTime: "6 min read",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["food photography", "visual storytelling", "photography tips"]
    },
    {
      id: 7,
      title: "Mindfulness Practices for Creative Writers",
      excerpt: "How meditation and mindfulness can help overcome writer's block and enhance creativity.",
      content: "The creative mind thrives in stillness. By cultivating mindfulness, writers can access deeper levels of imagination and insight...",
      author: "Aisha Johnson",
      authorImage: "https://randomuser.me/api/portraits/women/42.jpg",
      date: "2023-09-12",
      readTime: "7 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["mindfulness", "creativity", "writer's block"]
    },
    {
      id: 8,
      title: "The Future of Digital Storytelling",
      excerpt: "Exploring emerging technologies and platforms that are reshaping how we create and consume stories.",
      content: "From virtual reality to interactive narratives, technology is opening new frontiers for storytellers to explore...",
      author: "Ryan Zhang",
      authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "2023-09-05",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["digital storytelling", "technology", "future trends"]
    },
    {
      id: 9,
      title: "Creating a Sustainable Content Strategy",
      excerpt: "How to plan and produce content consistently without burning out.",
      content: "Sustainable content creation isn't about producing more—it's about producing with purpose and intention...",
      author: "Natalie Rivera",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "2023-08-30",
      readTime: "8 min read",
      category: "Content Strategy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["content strategy", "productivity", "planning"]
    },
    {
      id: 10,
      title: "The Ethics of Storytelling in Journalism",
      excerpt: "Navigating the responsibilities that come with sharing real-world stories and experiences.",
      content: "With great storytelling power comes great responsibility. Ethical considerations are at the heart of impactful journalism...",
      author: "Michael Thompson",
      authorImage: "https://randomuser.me/api/portraits/men/52.jpg",
      date: "2023-08-25",
      readTime: "10 min read",
      category: "Journalism",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["journalism", "ethics", "storytelling"]
    }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  
  // Function to add a new blog
  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  // Function to delete a blog
  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  // Function to update a blog
  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
  };

  // Value to be provided to consumers
  const value = {
    blogs,
    addBlog,
    deleteBlog,
    updateBlog
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext; 