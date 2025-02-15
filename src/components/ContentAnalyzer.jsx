import React, { useState } from 'react';
import { analyzeContent } from '../utils/aiService';
import './ContentAnalyzer.css';

const ContentAnalyzer = () => {
  const [content, setContent] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleAnalyzeContent = async () => {
    setLoading(true);
    setError('');
    setAnalysis(null);
    try {
      const aiResponse = await analyzeContent(content);
      setAnalysis(aiResponse);
    } catch (err) {
      setError('Failed to analyze content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-analyzer-container">
      <h2>Content Analyzer</h2>
      <textarea
        className="analyzer-textarea"
        value={content}
        onChange={handleInputChange}
        placeholder="Paste your blog content here..."
      />
      <div className="analyzer-actions">
        <button
          className="analyze-button"
          onClick={handleAnalyzeContent}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Content'}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {analysis && (
        <div className="analysis-results">
          <h3>Analysis Results</h3>
          <div className="analysis-section">
            <h4>SEO Suggestions</h4>
            <ul>
              {analysis.seoSuggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
          <div className="analysis-section">
            <h4>Readability Score</h4>
            <p>{analysis.readabilityScore}</p>
          </div>
          <div className="analysis-section">
            <h4>Content Optimization Tips</h4>
            <ul>
              {analysis.optimizationTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentAnalyzer;
