import React, { useState } from 'react';
import { generateText } from '../utils/aiService';
import './SmartEditor.css';

const SmartEditor = () => {
  const [content, setContent] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleGenerateSuggestions = async () => {
    setLoading(true);
    setError('');
    try {
      const prompt = `Provide content suggestions and auto-completions for the following blog content: "${content}"`;
      const aiResponse = await generateText(prompt);
      setSuggestions(aiResponse.split('\\n').filter((line) => line.trim() !== ''));
    } catch (err) {
      setError('Failed to generate suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setContent((prevContent) => `${prevContent} ${suggestion}`);
  };

  return (
    <div className="smart-editor-container">
      <h2>Smart Blog Editor</h2>
      <textarea
        className="editor-textarea"
        value={content}
        onChange={handleInputChange}
        placeholder="Start writing your blog here..."
      />
      <div className="editor-actions">
        <button
          className="generate-button"
          onClick={handleGenerateSuggestions}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Get Suggestions'}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          <h3>AI Suggestions</h3>
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SmartEditor;
