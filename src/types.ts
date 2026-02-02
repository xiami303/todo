export type Priority = 'high' | 'medium' | 'low';
export type Category = 'personal' | 'work' | 'shopping' | 'health' | 'other';
export type FilterStatus = 'all' | 'active' | 'completed';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  createdAt: number;
  completedAt?: number;
}

export interface FilterState {
  status: FilterStatus;
  priority: Priority | 'all';
  category: Category | 'all';
  searchText: string;
}
