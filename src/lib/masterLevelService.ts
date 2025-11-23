// Import Gemini API service
import { callGeminiAPI } from './geminiService';
import { create } from 'zustand';

// Re-export types from centralized types file for backward compatibility
export type {
  Flashcard,
  AssessmentQuestion,
  LevelData,
  LLMContentRequest,
  LLMContentResponse,
  Questionnaire,
  ProcessedFiles,
  AnswersDocument,
  LoadingState as LoadingStateType
} from '@/types';

import type {
  Flashcard,
  AssessmentQuestion,
  LevelData,
  ProcessedFiles,
  Questionnaire,
  AnswersDocument,
  LoadingState
} from '@/types';

export const useLoadingState = create<LoadingState>((set) => ({
  isLoading: false,
  message: "Processing your request...",
  setLoading: (isLoading, message = "Processing your request...") => set({ 
    isLoading,
    message: isLoading ? message : ""
  }),
}));

/**
 * Fetches level content using Gemini API
 * @param level The level number to fetch
 * @param files Files processed for API submission
 * @param questionnaire Previous level answers (needed for levels > 0)
 * @returns LevelData for the requested level
 */
export const fetchLevelContent = async (
  level: number,
  files?: ProcessedFiles,
  questionnaire?: Questionnaire
): Promise<LevelData> => {
  // Set loading state
  const setLoading = useLoadingState.getState().setLoading;
  setLoading(true, getLevelLoadingMessage(level));

  try {
    // Ensure we have files for the API request
    let filesForRequest = files;

    // If no files were provided, try to get them from session storage
    if (!filesForRequest || Object.keys(filesForRequest).length === 0) {
      const storedFiles = sessionStorage.getItem('uploadedFiles');
      if (storedFiles) {
        try {
          filesForRequest = JSON.parse(storedFiles);
        } catch (error) {
          console.error('Error parsing stored files for API request:', error);
        }
      }
    }

    // For level 6, check for answers document in session storage
    let answersDocument = null;
    if (level === 6) {
      const storedAnswersDoc = sessionStorage.getItem('answersDocument');
      if (storedAnswersDoc) {
        try {
          answersDocument = JSON.parse(storedAnswersDoc);
        } catch (error) {
          console.error('Error parsing answers document:', error);
        }
      }
    }

    // Use our Gemini API service to get content
    try {
      const result = await callGeminiAPI(level, filesForRequest || {}, questionnaire, answersDocument);
      return result;
    } catch (error: any) {
      console.error('Error from Gemini API:', error.message);
      throw new Error(`Failed to get content from Gemini: ${error.message}`);
    }
  } catch (error) {
    console.error('Error fetching level content:', error);
    throw error;
  } finally {
    // Clear loading state
    setLoading(false);
  }
};

/**
 * Submits user answers to the current level and fetches the next level content
 * @param currentLevel The current level number
 * @param questions The assessment questions from the current level
 * @param answers User's answers to the questions
 * @param files Files processed for API submission
 * @returns LevelData for the next level
 */
export const submitAnswersAndGetNextLevel = async (
  currentLevel: number,
  questions: AssessmentQuestion[],
  answers: Record<string, string[]>,
  files: ProcessedFiles
): Promise<LevelData> => {
  // Package the questionnaire
  const questionnaire = {
    questions,
    answers
  };

  // Set loading state with submission-specific message
  const setLoading = useLoadingState.getState().setLoading;
  setLoading(true, `Analyzing your answers and generating Level ${currentLevel + 1} content...`);
  
  try {
    // Fetch the next level content
    return await fetchLevelContent(currentLevel + 1, files, questionnaire);
  } finally {
    // Clear loading state
    setLoading(false);
  }
};

/**
 * Helper function to generate level-specific loading messages
 */
function getLevelLoadingMessage(level: number): string {
  switch(level) {
    case 0:
      return "Analyzing your assignment materials...";
    case 1:
      return "Building your basic understanding content...";
    case 2: 
      return "Developing advanced concepts for your assignment...";
    case 3:
      return "Creating practical application examples...";
    case 4:
      return "Generating expert implementation guidance...";
    case 5:
      return "Preparing mastery level content...";
    case 6:
      return "Evaluating your submitted assignment...";
    default:
      return "Processing your request...";
  }
}