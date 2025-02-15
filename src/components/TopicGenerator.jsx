import React, { useState } from 'react';
import { suggestTopics } from '../utils/aiService';
import './TopicGenerator.css';

const TopicGenerator = () => {
  const [keywords, setKeywords] = useState('');
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleGenerateTopics = async () => {
    setLoading(true);
    setError('');
    setTopics([]);
    try {
      const aiResponse = await suggestTopics(keywords);
      setTopics(aiResponse);
    } catch (err) {
      setError('Failed to generate topics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="topic-generator-container">
      <h2>AI-Powered Topic Generator</h2>
      <textarea
        className="topic-input"
        value={keywords}
        onChange={handleInputChange}
        placeholder="Enter keywords or ideas for topic suggestions..."
      />
      <div className="topic-actions">
        <button
          className="generate-button"
          onClick={handleGenerateTopics}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Topics'}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {topics.length > 0 && (
        <div className="topics-list-container">
          <h3>Suggested Topics</h3>
          <ul className="topics-list">
            {topics.map((topic, index) => (
              <li key={index} className="topic-item">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopicGenerator;
