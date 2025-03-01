import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BlogApp</h3>
          <p>Share your stories with the world</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Write</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@blogapp.com</p>
          <p>Follow us on social media</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 