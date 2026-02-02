import React, { useState, useEffect } from 'react';
import { Priority, Category } from '../types';
import { VoiceButton } from './VoiceButton';
import { useSpeechRecognition } from '../useSpeechRecognition';

interface AddTodoFormProps {
  onAdd: (text: string, priority: Priority, category: Category) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState<Category>('personal');
  
  const { isListening, transcript, interimTranscript, startListening, isSupported } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setText(transcript);
    }
  }, [transcript]);

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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        {isSupported && (
          <div className="mb-4">
            <VoiceButton
              isListening={isListening}
              onClick={startListening}
              disabled={isListening}
            />
            {interimTranscript && (
              <p className="mt-2 text-sm text-gray-500 italic">识别中: {interimTranscript}</p>
            )}
          </div>
        )}
        
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="输入待办事项..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">优先级</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
      >
        添加
      </button>
    </form>
  );
};
