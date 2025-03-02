// Remove the CSS import as we'll use Tailwind instead
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h3 className="text-2xl font-bold mb-3">BlogApp</h3>
          <p className="text-gray-300">Share your stories with the world</p>
        </div>
        <div className="footer-section">
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Write</li>
            <li className="hover:text-blue-400 cursor-pointer transition">About</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 mb-2">Email: contact@blogapp.com</p>
          <p className="text-gray-300">Follow us on social media</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
        <p className="text-gray-400">&copy; 2024 BlogApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 