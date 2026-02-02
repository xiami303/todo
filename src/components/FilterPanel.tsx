import React from 'react';
import { FilterState, Priority, Category, FilterStatus } from '../types';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <div>
        <input
          type="text"
          value={filters.searchText}
          onChange={(e) => onFilterChange({ ...filters, searchText: e.target.value })}
          placeholder="搜索任务..."
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">状态</label>
          <select
            value={filters.status}
            onChange={(e) =>
              onFilterChange({ ...filters, status: e.target.value as FilterStatus })
            }
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            <option value="all">全部</option>
            <option value="active">未完成</option>
            <option value="completed">已完成</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">优先级</label>
          <select
            value={filters.priority}
            onChange={(e) =>
              onFilterChange({ ...filters, priority: e.target.value as Priority | 'all' })
            }
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
            value={filters.category}
            onChange={(e) =>
              onFilterChange({ ...filters, category: e.target.value as Category | 'all' })
            }
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
