import React, { createContext, useContext } from 'react';
import useAI from '../hooks/useAI';

/**
 * AIContext
 * This context provides global state and functions for AI-related operations.
 */
const AIContext = createContext();

/**
 * AIProvider
 * This component wraps the application and provides AI-related state and functions.
 * @param {Object} props - The children components to be wrapped by the provider.
 */
export const AIProvider = ({ children }) => {
  // Use the custom hook to manage AI state and operations
  const aiState = useAI();

  return (
    <AIContext.Provider value={aiState}>
      {children}
    </AIContext.Provider>
  );
};

/**
 * useAIContext
 * Custom hook to consume the AIContext.
 * @returns {Object} - The AI-related state and functions.
 */
export const useAIContext = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAIContext must be used within an AIProvider');
  }
  return context;
};

export default AIContext;
