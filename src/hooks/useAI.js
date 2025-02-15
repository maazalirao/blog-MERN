import { useState, useCallback } from 'react';
import aiService from '../utils/aiService';

/**
 * Custom Hook: useAI
 * This hook manages AI interactions and state for text generation, content analysis, and topic suggestions.
 */
const useAI = () => {
  // State variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  /**
   * Function to handle text generation using AI.
   * @param {string} prompt - The input prompt for text generation.
   */
  const handleGenerateText = useCallback(async (prompt) => {
    setLoading(true);
    setError('');
    setResults(null);
    try {
      const generatedText = await aiService.generateText(prompt);
      setResults(generatedText);
    } catch (err) {
      setError('Failed to generate text. Please try again.');
      console.error('Error in handleGenerateText:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Function to handle content analysis using AI.
   * @param {string} content - The content to be analyzed.
   */
  const handleAnalyzeContent = useCallback(async (content) => {
    setLoading(true);
    setError('');
    setResults(null);
    try {
      const analysis = await aiService.analyzeContent(content);
      setResults(analysis);
    } catch (err) {
      setError('Failed to analyze content. Please try again.');
      console.error('Error in handleAnalyzeContent:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Function to handle topic suggestions using AI.
   * @param {string} keywords - The keywords for generating topic suggestions.
   */
  const handleSuggestTopics = useCallback(async (keywords) => {
    setLoading(true);
    setError('');
    setResults(null);
    try {
      const topics = await aiService.suggestTopics(keywords);
      setResults(topics);
    } catch (err) {
      setError('Failed to suggest topics. Please try again.');
      console.error('Error in handleSuggestTopics:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Return state and functions for use in components
  return {
    loading,
    error,
    results,
    handleGenerateText,
    handleAnalyzeContent,
    handleSuggestTopics,
  };
};

export default useAI;
