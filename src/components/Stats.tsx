import React from 'react';
import { Todo } from '../types';

interface StatsProps {
  todos: Todo[];
}

export const Stats: React.FC<StatsProps> = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
        <div className="text-2xl font-bold">{total}</div>
        <div className="text-sm opacity-90">总任务</div>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
        <div className="text-2xl font-bold">{active}</div>
        <div className="text-sm opacity-90">未完成</div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
        <div className="text-2xl font-bold">{completed}</div>
        <div className="text-sm opacity-90">已完成</div>
      </div>
      <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-4 text-white">
        <div className="text-2xl font-bold">{completionRate}%</div>
        <div className="text-sm opacity-90">完成率</div>
      </div>
    </div>
  );
};
