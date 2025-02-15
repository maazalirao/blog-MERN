/**
 * AI Configuration File
 * This file contains the configuration for integrating AI services such as OpenAI.
 * It includes API keys, model configurations, and service endpoints.
 */

const AIConfig = {
  // OpenAI API Configuration
  openAI: {
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // API Key for OpenAI (set in environment variables)
    endpoint: 'https://api.openai.com/v1', // Base endpoint for OpenAI API
    defaultModel: 'text-davinci-003', // Default model for text generation
    temperature: 0.7, // Default temperature for text generation
    maxTokens: 1500, // Maximum tokens for AI responses
    topP: 1, // Top-p sampling parameter
    frequencyPenalty: 0, // Frequency penalty for token repetition
    presencePenalty: 0, // Presence penalty for token repetition
  },

  // AI Service Endpoints
  services: {
    textGeneration: '/text-generation', // Endpoint for text generation
    contentAnalysis: '/content-analysis', // Endpoint for content analysis
    topicSuggestions: '/topic-suggestions', // Endpoint for topic suggestions
  },

  // General AI Settings
  settings: {
    enableLogging: true, // Enable logging for debugging AI interactions
    retryAttempts: 3, // Number of retry attempts for failed API calls
    timeout: 10000, // Timeout for API requests in milliseconds
  },
};

export default AIConfig;
