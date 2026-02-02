import React from 'react';
import { Todo } from '../types';

interface StatsProps {
  todos: Todo[];
}

export const Stats: React.FC<StatsProps> = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-sm text-gray-600">总计</p>
        <p className="text-2xl font-bold text-purple-600">{total}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-sm text-gray-600">进行中</p>
        <p className="text-2xl font-bold text-blue-600">{active}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-sm text-gray-600">已完成</p>
        <p className="text-2xl font-bold text-green-600">{completed}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-sm text-gray-600">完成率</p>
        <p className="text-2xl font-bold text-pink-600">{completionRate}%</p>
      </div>
    </div>
  );
};
