import React from 'react';
import { Todo, Priority } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors: Record<Priority, string> = {
  high: 'bg-red-100 text-red-800 border-red-300',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  low: 'bg-green-100 text-green-800 border-green-300',
};

const priorityLabels: Record<Priority, string> = {
  high: '高',
  medium: '中',
  low: '低',
};

const categoryLabels: Record<string, string> = {
  personal: '个人',
  work: '工作',
  shopping: '购物',
  health: '健康',
  other: '其他',
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border-2 p-4 transition-all duration-200 hover:shadow-md ${
        todo.completed ? 'border-gray-300 opacity-75' : 'border-purple-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <p
            className={`text-gray-900 break-words ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span
              className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${
                priorityColors[todo.priority]
              }`}
            >
              {priorityLabels[todo.priority]}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 border border-blue-300">
              {categoryLabels[todo.category]}
            </span>
          </div>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 transition-colors p-1"
          aria-label="删除任务"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
