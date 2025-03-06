import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = {
    name: "User",
    profilePic: "https://via.placeholder.com/40"
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-heading text-2xl font-bold text-blog-primary hover:text-blog-accent transition-colors">
              BlogApp
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="font-body text-blog-secondary hover:text-blog-accent transition-colors">Home</Link>
            <Link to="/explore" className="font-body text-blog-secondary hover:text-blog-accent transition-colors">Explore</Link>
            <Link to="/write" className="font-body text-blog-secondary hover:text-blog-accent transition-colors">Write</Link>
            <Link to="/about" className="font-body text-blog-secondary hover:text-blog-accent transition-colors">About</Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <img src={user.profilePic} alt="profile" className="w-8 h-8 rounded-full border-2 border-blog-accent" />
            <button className="bg-blog-accent text-white px-4 py-2 rounded-lg hover:bg-blog-primary transition-colors font-body">
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blog-secondary hover:text-blog-accent"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-body text-blog-secondary hover:text-blog-accent hover:bg-gray-50">Home</Link>
            <Link to="/explore" className="block px-3 py-2 rounded-md text-base font-body text-blog-secondary hover:text-blog-accent hover:bg-gray-50">Explore</Link>
            <Link to="/write" className="block px-3 py-2 rounded-md text-base font-body text-blog-secondary hover:text-blog-accent hover:bg-gray-50">Write</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-body text-blog-secondary hover:text-blog-accent hover:bg-gray-50">About</Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <img src={user.profilePic} alt="profile" className="w-8 h-8 rounded-full border-2 border-blog-accent" />
              <button className="w-full bg-blog-accent text-white px-4 py-2 rounded-lg hover:bg-blog-primary transition-colors font-body">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 