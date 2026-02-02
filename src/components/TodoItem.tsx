import { useState } from 'react';
import { Trash2, Edit2, Check, X, Flag } from 'lucide-react';
import { Todo, Priority, Category } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
}

const priorityColors: Record<Priority, string> = {
  low: 'bg-blue-100 text-blue-700 border-blue-300',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  high: 'bg-red-100 text-red-700 border-red-300',
};

const priorityLabels: Record<Priority, string> = {
  low: '低',
  medium: '中',
  high: '高',
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

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority);
  const [editCategory, setEditCategory] = useState(todo.category);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, {
        text: editText.trim(),
        priority: editPriority,
        category: editCategory,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditPriority(todo.priority);
    setEditCategory(todo.category);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 border-2 border-purple-300">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') handleCancel();
          }}
        />
        <div className="flex gap-3 mb-3">
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value as Priority)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          >
            <option value="low">低优先级</option>
            <option value="medium">中优先级</option>
            <option value="high">高优先级</option>
          </select>
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value as Category)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          >
            <option value="personal">👤 个人</option>
            <option value="work">💼 工作</option>
            <option value="shopping">🛒 购物</option>
            <option value="health">💪 健康</option>
            <option value="other">📌 其他</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            保存
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            取消
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group bg-white border-2 rounded-lg p-4 transition-all hover:shadow-md ${
        todo.completed ? 'border-gray-200 bg-gray-50' : 'border-gray-200 hover:border-purple-300'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-purple-500'
          }`}
        >
          {todo.completed && <Check className="w-4 h-4 text-white" />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-lg break-words ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[todo.priority]}`}>
              <Flag className="w-3 h-3 inline mr-1" />
              {priorityLabels[todo.priority]}优先级
            </span>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
              {categoryEmojis[todo.category]} {categoryLabels[todo.category]}
            </span>
            <span className="px-2 py-1 rounded-full text-xs text-gray-500">
              {new Date(todo.createdAt).toLocaleDateString('zh-CN', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="编辑"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="删除"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
