import { CheckCircle2, Circle, ListTodo } from 'lucide-react';
import { Todo } from '../types';

interface StatsProps {
  todos: Todo[];
}

export default function Stats({ todos }: StatsProps) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-purple-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">总任务</p>
            <p className="text-3xl font-bold text-purple-600">{totalTodos}</p>
          </div>
          <ListTodo className="w-10 h-10 text-purple-400" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">待完成</p>
            <p className="text-3xl font-bold text-blue-600">{pendingTodos}</p>
          </div>
          <Circle className="w-10 h-10 text-blue-400" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">已完成</p>
            <p className="text-3xl font-bold text-green-600">{completedTodos}</p>
          </div>
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">完成率</p>
            <p className="text-3xl font-bold text-orange-600">{completionRate}%</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-xl">🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
}
