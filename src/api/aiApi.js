/**
 * AI API Integration File
 * This file handles backend AI operations by interacting with the OpenAI API.
 * It provides methods for text generation, content analysis, and topic suggestions.
 */

import axios from 'axios';
import AIConfig from '../config/ai-config';

// Create an Axios instance for AI API requests
const aiApiClient = axios.create({
  baseURL: AIConfig.openAI.endpoint,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AIConfig.openAI.apiKey}`,
  },
});

// Function to handle text generation
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
    console.error('Error in generateText:', error);
    throw new Error('Failed to generate text. Please try again.');
  }
};

// Function to handle content analysis
export const analyzeContent = async (content) => {
  try {
    const response = await aiApiClient.post(AIConfig.services.contentAnalysis, {
      content,
    });
    return response.data;
  } catch (error) {
    console.error('Error in analyzeContent:', error);
    throw new Error('Failed to analyze content. Please try again.');
  }
};

// Function to handle topic suggestions
export const suggestTopics = async (keywords) => {
  try {
    const response = await aiApiClient.post(AIConfig.services.topicSuggestions, {
      keywords,
    });
    return response.data.suggestions;
  } catch (error) {
    console.error('Error in suggestTopics:', error);
    throw new Error('Failed to suggest topics. Please try again.');
  }
};

// Export all API functions
const aiApi = {
  generateText,
  analyzeContent,
  suggestTopics,
};

export default aiApi;
