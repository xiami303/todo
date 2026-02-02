import { useState, useEffect, useMemo } from 'react';
import { Todo, Priority, Category, FilterState } from './types';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { saveTodos, loadTodos } from './utils/storage';
import { VoiceButton } from './components/VoiceButton';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoItem } from './components/TodoItem';
import { FilterPanel } from './components/FilterPanel';
import { Stats } from './components/Stats';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    status: 'all',
    priority: 'all',
    category: 'all',
    searchText: '',
  });

  const { transcript, isListening, isSupported, error, startListening, stopListening } =
    useSpeechRecognition();

  useEffect(() => {
    const loaded = loadTodos();
    setTodos(loaded);
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
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? Date.now() : undefined,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filters.status === 'active' && todo.completed) return false;
      if (filters.status === 'completed' && !todo.completed) return false;
      if (filters.priority !== 'all' && todo.priority !== filters.priority) return false;
      if (filters.category !== 'all' && todo.category !== filters.category) return false;
      if (
        filters.searchText &&
        !todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
      )
        return false;
      return true;
    });
  }, [todos, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4 safe-area-inset">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            语音待办事项
          </h1>
          <p className="text-gray-600">支持语音输入，让管理任务更简单</p>
        </header>

        <Stats todos={todos} />

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <VoiceButton
            isListening={isListening}
            isSupported={isSupported}
            onStart={startListening}
            onStop={stopListening}
          />
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              错误: {error}
            </div>
          )}
          {isListening && transcript && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg">
              识别中: {transcript}
            </div>
          )}
          <AddTodoForm
            onAdd={addTodo}
            voiceTranscript={transcript}
            isListening={isListening}
          />
        </div>

        <FilterPanel filters={filters} onFilterChange={setFilters} />

        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="mt-2 text-gray-500">暂无任务，使用语音或手动添加新任务</p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
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
