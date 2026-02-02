import React, { useState, useEffect } from 'react';
import { Priority, Category } from '../types';

interface AddTodoFormProps {
  onAdd: (text: string, priority: Priority, category: Category) => void;
  voiceTranscript: string;
  isListening: boolean;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({
  onAdd,
  voiceTranscript,
  isListening,
}) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState<Category>('personal');

  useEffect(() => {
    if (voiceTranscript && !isListening) {
      setText(voiceTranscript);
    }
  }, [voiceTranscript, isListening]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim(), priority, category);
      setText('');
      setPriority('medium');
      setCategory('personal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="输入待办事项..."
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">优先级</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="high">高</option>
            <option value="medium">中</option>
            <option value="low">低</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="personal">个人</option>
            <option value="work">工作</option>
            <option value="shopping">购物</option>
            <option value="health">健康</option>
            <option value="other">其他</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={!text.trim()}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        添加任务
      </button>
    </form>
  );
};
