export type Priority = 'low' | 'medium' | 'high';

export type Category = 'personal' | 'work' | 'shopping' | 'health' | 'other';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  createdAt: number;
  completedAt?: number;
}

export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}
