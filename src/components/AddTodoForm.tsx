import { Plus } from 'lucide-react';
import { Priority, Category } from '../types';

interface AddTodoFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  priority: Priority;
  setPriority: (priority: Priority) => void;
  category: Category;
  setCategory: (category: Category) => void;
  onAdd: () => void;
  isListening: boolean;
}

export default function AddTodoForm({
  inputText,
  setInputText,
  priority,
  setPriority,
  category,
  setCategory,
  onAdd,
  isListening,
}: AddTodoFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="输入待办事项或使用语音输入..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onAdd()}
          disabled={isListening}
          className={`flex-1 px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg transition-all ${
            isListening ? 'border-purple-400 bg-purple-50' : 'border-gray-300'
          }`}
        />
        <button
          onClick={onAdd}
          disabled={!inputText.trim() || isListening}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 font-medium shadow-lg"
        >
          <Plus className="w-5 h-5" />
          添加
        </button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">优先级</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            disabled={isListening}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          >
            <option value="low">🔵 低</option>
            <option value="medium">🟡 中</option>
            <option value="high">🔴 高</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            disabled={isListening}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          >
            <option value="personal">👤 个人</option>
            <option value="work">💼 工作</option>
            <option value="shopping">🛒 购物</option>
            <option value="health">💪 健康</option>
            <option value="other">📌 其他</option>
          </select>
        </div>
      </div>
    </div>
  );
}
