import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p className="about-description">
          Welcome to BlogApp, your platform for sharing stories and connecting with readers around the world. 
          We believe everyone has a story worth telling, and we're here to help you share yours.
        </p>
        
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To create a space where writers can freely express their ideas, share their knowledge, 
            and connect with an engaged community of readers and fellow writers.
          </p>
        </div>

        <div className="features-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Easy-to-use writing platform</li>
            <li>Engaged community of readers</li>
            <li>Beautiful, responsive design</li>
            <li>Seamless sharing capabilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About; 