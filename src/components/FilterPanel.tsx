import { Priority, Category } from '../types';

interface FilterPanelProps {
  filterPriority: Priority | 'all';
  setFilterPriority: (priority: Priority | 'all') => void;
  filterCategory: Category | 'all';
  setFilterCategory: (category: Category | 'all') => void;
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
}

export default function FilterPanel({
  filterPriority,
  setFilterPriority,
  filterCategory,
  setFilterCategory,
  showCompleted,
  setShowCompleted,
}: FilterPanelProps) {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="font-medium text-gray-700 mb-3">筛选条件</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">优先级</label>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value as Priority | 'all')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          >
            <option value="all">全部</option>
            <option value="high">🔴 高</option>
            <option value="medium">🟡 中</option>
            <option value="low">🔵 低</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value as Category | 'all')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          >
            <option value="all">全部</option>
            <option value="personal">👤 个人</option>
            <option value="work">💼 工作</option>
            <option value="shopping">🛒 购物</option>
            <option value="health">💪 健康</option>
            <option value="other">📌 其他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">显示状态</label>
          <div className="flex items-center h-10">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
                className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">显示已完成</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
