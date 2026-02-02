import React from 'react';
import { Todo, Priority, Category } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors: Record<Priority, string> = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800',
};

const priorityLabels: Record<Priority, string> = {
  high: '高',
  medium: '中',
  low: '低',
};

const categoryLabels: Record<Category, string> = {
  personal: '个人',
  work: '工作',
  shopping: '购物',
  health: '健康',
  other: '其他',
};

const categoryEmojis: Record<Category, string> = {
  personal: '👤',
  work: '💼',
  shopping: '🛒',
  health: '💪',
  other: '📌',
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-3 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
        />
        
        <div className="flex-1">
          <p className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {todo.text}
          </p>
          
          <div className="flex items-center gap-2 mt-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[todo.priority]}`}>
              {priorityLabels[todo.priority]}
            </span>
            <span className="text-sm text-gray-500">
              {categoryEmojis[todo.category]} {categoryLabels[todo.category]}
            </span>
          </div>
        </div>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};
