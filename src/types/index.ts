/**
 * Centralized type definitions for the AdaptED AI application
 */

// ============================================================================
// File Upload Types
// ============================================================================

export interface FileInput {
  name: string;
  content: string;
  encoding?: 'text' | 'base64';
  type?: string;
}

export interface ProcessedFiles {
  assignment?: FileInput;
  resources?: FileInput[];
}

export interface AnswersDocument {
  name: string;
  content: string;
  type: string;
}

// ============================================================================
// Learning Content Types
// ============================================================================

export interface Flashcard {
  heading: string;
  flashcard_content: string;
}

export interface AssessmentQuestion {
  id: string;
  concept_focus: string;
  type: 'MCQ' | 'MAQ';
  question_text: string;
  options: string[];
  correct_answers: string[];
}

export interface LevelData {
  status: string;
  main_content_md?: string;
  main_conent_md?: string; // Legacy typo support
  assignment_summary_md?: string;
  feedback_md?: string;
  practice_assignment_md?: string;
  solution_md?: string;
  flashcards: Flashcard[];
  assessment_questions: AssessmentQuestion[];
}

export interface Questionnaire {
  questions: AssessmentQuestion[];
  answers: Record<string, string[]>;
}

// ============================================================================
// API Request/Response Types
// ============================================================================

export interface LLMContentRequest {
  type: string;
  level: number;
  files: ProcessedFiles;
  questionnaire?: Questionnaire;
}

export interface LLMContentResponse {
  response: LevelData;
  level: number;
  type: string;
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface LevelSelectorProps {
  currentLevel: number;
  onSelectLevel: (level: number) => void;
  completedLevels?: number[];
}

export interface FlashcardItemProps {
  flashcard: Flashcard;
  index: number;
  isActive: boolean;
  showAnswer: boolean;
  onToggleAnswer: () => void;
}

export interface ContentBlockProps {
  content: string;
  title?: string;
  className?: string;
}

// ============================================================================
// State Management Types
// ============================================================================

export interface LoadingState {
  isLoading: boolean;
  message: string;
  setLoading: (isLoading: boolean, message?: string) => void;
}

export type ProgressState = 'reading' | 'flashcards' | 'questions' | 'completed';

export type HelpType = 'quick-start' | 'learn-fast' | 'master-it';

// ============================================================================
// Utility Types
// ============================================================================

export type AnsweredQuestions = Record<string, string[]>;

export interface LevelProgress {
  level: number;
  completed: boolean;
  score?: number;
  timestamp: string;
}
