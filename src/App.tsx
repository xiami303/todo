import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Trash2, Circle, AlertCircle } from 'lucide-react';
import { Todo, Priority, Category } from './types';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { saveTodos, loadTodos } from './utils/storage';
import TodoItem from './components/TodoItem';
import VoiceButton from './components/VoiceButton';
import AddTodoForm from './components/AddTodoForm';
import FilterPanel from './components/FilterPanel';
import Stats from './components/Stats';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState<Category>('personal');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<Category | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const {
    transcript,
    isListening,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    error: speechError,
  } = useSpeechRecognition();

  // Load todos on mount
  useEffect(() => {
    const loadedTodos = loadTodos();
    setTodos(loadedTodos);
  }, []);

  // Save todos on change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Update input when speech recognition completes
  useEffect(() => {
    if (transcript && !isListening) {
      setInputText(transcript);
      resetTranscript();
    }
  }, [transcript, isListening, resetTranscript]);

  const addTodo = () => {
    const text = inputText.trim();
    if (!text) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      category,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInputText('');
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

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter and search todos
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // Search filter
      if (searchQuery && !todo.text.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Priority filter
      if (filterPriority !== 'all' && todo.priority !== filterPriority) {
        return false;
      }

      // Category filter
      if (filterCategory !== 'all' && todo.category !== filterCategory) {
        return false;
      }

      // Completed filter
      if (!showCompleted && todo.completed) {
        return false;
      }

      return true;
    });
  }, [todos, searchQuery, filterPriority, filterCategory, showCompleted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            🎤 语音待办事项
          </h1>
          <p className="text-white/90 text-lg">
            支持语音输入的智能待办清单
          </p>
        </div>

        {/* Stats */}
        <Stats todos={todos} />

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          {/* Add Todo Form */}
          <AddTodoForm
            inputText={inputText}
            setInputText={setInputText}
            priority={priority}
            setPriority={setPriority}
            category={category}
            setCategory={setCategory}
            onAdd={addTodo}
            isListening={isListening}
          />

          {/* Voice Button */}
          <VoiceButton
            isSupported={isSupported}
            isListening={isListening}
            onStart={startListening}
            onStop={stopListening}
            transcript={transcript}
          />

          {/* Speech Error */}
          {speechError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{speechError}</p>
            </div>
          )}

          {/* Search and Filter */}
          <div className="mt-6 flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索待办事项..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                showFilterPanel
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-5 h-5" />
              筛选
            </button>
          </div>

          {/* Filter Panel */}
          {showFilterPanel && (
            <FilterPanel
              filterPriority={filterPriority}
              setFilterPriority={setFilterPriority}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              showCompleted={showCompleted}
              setShowCompleted={setShowCompleted}
            />
          )}

          {/* Todo List */}
          <div className="mt-6 space-y-3 max-h-[500px] overflow-y-auto scrollbar-hide">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Circle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">暂无待办事项</p>
                <p className="text-sm mt-2">点击上方按钮或使用语音添加新任务</p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onUpdate={updateTodo}
                />
              ))
            )}
          </div>

          {/* Clear Completed */}
          {todos.some((todo) => todo.completed) && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={clearCompleted}
                className="w-full py-2 px-4 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                清除已完成任务
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-white/80 text-sm">
          <p>💡 提示: 点击麦克风图标使用语音输入</p>
          <p className="mt-1">支持中文语音识别</p>
        </div>
      </div>
    </div>
  );
}

export default App;
