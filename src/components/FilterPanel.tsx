import React from 'react';
import { Priority, Category, FilterStatus } from '../types';

interface FilterPanelProps {
  filterStatus: FilterStatus;
  filterPriority: Priority | 'all';
  filterCategory: Category | 'all';
  searchText: string;
  onFilterStatusChange: (status: FilterStatus) => void;
  onFilterPriorityChange: (priority: Priority | 'all') => void;
  onFilterCategoryChange: (category: Category | 'all') => void;
  onSearchChange: (text: string) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filterStatus,
  filterPriority,
  filterCategory,
  searchText,
  onFilterStatusChange,
  onFilterPriorityChange,
  onFilterCategoryChange,
  onSearchChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="🔍 搜索待办事项..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">状态</label>
          <select
            value={filterStatus}
            onChange={(e) => onFilterStatusChange(e.target.value as FilterStatus)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">全部</option>
            <option value="active">进行中</option>
            <option value="completed">已完成</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">优先级</label>
          <select
            value={filterPriority}
            onChange={(e) => onFilterPriorityChange(e.target.value as Priority | 'all')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">全部</option>
            <option value="high">高</option>
            <option value="medium">中</option>
            <option value="low">低</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
          <select
            value={filterCategory}
            onChange={(e) => onFilterCategoryChange(e.target.value as Category | 'all')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">全部</option>
            <option value="personal">个人</option>
            <option value="work">工作</option>
            <option value="shopping">购物</option>
            <option value="health">健康</option>
            <option value="other">其他</option>
          </select>
        </div>
      </div>
    </div>
  );
};
