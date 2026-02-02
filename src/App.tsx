import React, { useState, useEffect } from 'react';
import { Todo, Priority, Category, FilterStatus } from './types';
import { loadTodos, saveTodos } from './storage';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoItem } from './components/TodoItem';
import { FilterPanel } from './components/FilterPanel';
import { Stats } from './components/Stats';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<Category | 'all'>('all');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string, priority: Priority, category: Category) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      category,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    // 状态筛选
    if (filterStatus === 'active' && todo.completed) return false;
    if (filterStatus === 'completed' && !todo.completed) return false;

    // 优先级筛选
    if (filterPriority !== 'all' && todo.priority !== filterPriority) return false;

    // 分类筛选
    if (filterCategory !== 'all' && todo.category !== filterCategory) return false;

    // 搜索筛选
    if (searchText && !todo.text.toLowerCase().includes(searchText.toLowerCase())) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            🎤 语音待办事项
          </h1>
          <p className="text-gray-600">支持语音输入的智能待办清单</p>
        </div>

        <Stats todos={todos} />
        <AddTodoForm onAdd={addTodo} />
        <FilterPanel
          filterStatus={filterStatus}
          filterPriority={filterPriority}
          filterCategory={filterCategory}
          searchText={searchText}
          onFilterStatusChange={setFilterStatus}
          onFilterPriorityChange={setFilterPriority}
          onFilterCategoryChange={setFilterCategory}
          onSearchChange={setSearchText}
        />

        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {todos.length === 0 ? '还没有待办事项，试试语音输入添加一个吧！' : '没有符合条件的待办事项'}
            </div>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
