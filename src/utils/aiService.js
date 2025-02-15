/**
 * AI Service Utility File
 * This file contains utility functions for interacting with AI services such as OpenAI.
 * It provides methods for text generation, content analysis, and AI-powered recommendations.
 */

import axios from 'axios';
import AIConfig from '../config/ai-config';

// Axios instance for AI API requests
const aiApiClient = axios.create({
  baseURL: AIConfig.openAI.endpoint,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AIConfig.openAI.apiKey}`,
  },
});

// Utility function for text generation
export const generateText = async (prompt) => {
  try {
    const response = await aiApiClient.post('/completions', {
      model: AIConfig.openAI.defaultModel,
      prompt,
      temperature: AIConfig.openAI.temperature,
      max_tokens: AIConfig.openAI.maxTokens,
      top_p: AIConfig.openAI.topP,
      frequency_penalty: AIConfig.openAI.frequencyPenalty,
      presence_penalty: AIConfig.openAI.presencePenalty,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating text:', error);
    throw new Error('Failed to generate text. Please try again.');
  }
};

// Utility function for content analysis
export const analyzeContent = async (content) => {
  try {
    const response = await aiApiClient.post(AIConfig.services.contentAnalysis, {
      content,
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing content:', error);
    throw new Error('Failed to analyze content. Please try again.');
  }
};

// Utility function for topic suggestions
export const suggestTopics = async (keywords) => {
  try {
    const response = await aiApiClient.post(AIConfig.services.topicSuggestions, {
      keywords,
    });
    return response.data.suggestions;
  } catch (error) {
    console.error('Error suggesting topics:', error);
    throw new Error('Failed to suggest topics. Please try again.');
  }
};

// Export all utility functions
const aiService = {
  generateText,
  analyzeContent,
  suggestTopics,
};

export default aiService;
