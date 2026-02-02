# 🎤 语音待办事项 Voice Todo App

一个现代化的个人待办事项应用，支持**语音输入**功能，让任务管理更加高效便捷。

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-cyan)

## ✨ 核心功能

- 🎙️ **语音输入** - 支持中文语音识别，快速创建任务
- ✅ **任务管理** - 添加、编辑、删除、完成任务
- 🎯 **优先级设置** - 高/中/低三级优先级
- 📁 **分类管理** - 个人、工作、购物、健康、其他
- 🔍 **搜索过滤** - 快速查找和筛选任务
- 📊 **统计数据** - 实时显示任务完成情况
- 💾 **本地存储** - 数据保存在浏览器本地
- 📱 **响应式设计** - 完美适配各种设备

## 🚀 快速开始

### 前置要求

- Node.js 16+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用

### 生产构建

```bash
npm run build
```

构建产物在 `dist` 目录

### 预览生产版本

```bash
npm run preview
```

## 🎯 使用说明

### 语音输入

1. 点击 "🎤 点击开始语音输入" 按钮
2. 允许浏览器访问麦克风权限
3. 说出你的待办事项
4. 语音识别完成后会自动填充到输入框
5. 选择优先级和分类后点击"添加"

### 手动输入

1. 在输入框中输入待办事项
2. 选择优先级（低/中/高）
3. 选择分类（个人/工作/购物/健康/其他）
4. 点击"添加"按钮或按 Enter 键

### 任务管理

- **完成任务**: 点击任务前的圆圈图标
- **编辑任务**: 悬停后点击编辑图标
- **删除任务**: 悬停后点击删除图标
- **搜索任务**: 使用搜索框快速查找
- **筛选任务**: 点击筛选按钮，按优先级、分类、完成状态筛选

## 🌐 浏览器兼容性

语音识别功能需要浏览器支持 Web Speech API：

- ✅ Chrome 25+
- ✅ Edge 79+
- ✅ Safari 14.1+
- ❌ Firefox（不支持语音识别）

## 🛠️ 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI 框架**: Tailwind CSS
- **图标库**: Lucide React
- **语音识别**: Web Speech API
- **数据存储**: LocalStorage

## 📁 项目结构

```
voice-todo-app/
├── src/
│   ├── components/          # React 组件
│   │   ├── AddTodoForm.tsx  # 添加任务表单
│   │   ├── TodoItem.tsx     # 任务项组件
│   │   ├── VoiceButton.tsx  # 语音按钮
│   │   ├── FilterPanel.tsx  # 筛选面板
│   │   └── Stats.tsx        # 统计数据
│   ├── hooks/               # 自定义 Hooks
│   │   └── useSpeechRecognition.ts  # 语音识别 Hook
│   ├── utils/               # 工具函数
│   │   └── storage.ts       # 本地存储工具
│   ├── types.ts             # TypeScript 类型定义
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 应用入口
│   └── index.css            # 全局样式
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
├── vite.config.ts           # Vite 配置
└── tailwind.config.js       # Tailwind 配置
```

## 🎨 特性亮点

### 语音识别

使用浏览器原生 Web Speech API，无需第三方服务：

- 支持中文识别
- 实时显示识别结果
- 完善的错误处理
- 权限提示和兼容性检测

### 数据持久化

使用 LocalStorage 存储数据：

- 无需后端服务
- 数据完全本地化
- 隐私安全
- 离线可用

### 现代化 UI

- 渐变色彩设计
- 流畅动画效果
- 响应式布局
- 直观的交互反馈

## 🔧 配置说明

### 修改语言

默认支持中文，如需修改为其他语言，编辑 `src/hooks/useSpeechRecognition.ts`:

```typescript
recognition.lang = 'en-US'; // 英文
recognition.lang = 'ja-JP'; // 日语
```

### 自定义分类

编辑 `src/types.ts` 中的 `Category` 类型，然后在各组件中添加对应的标签和图标。

## 📝 开发计划

- [ ] 添加任务截止日期
- [ ] 任务提醒功能
- [ ] 导出/导入任务数据
- [ ] 深色模式支持
- [ ] 多语言支持
- [ ] 云端同步（可选）
- [ ] 移动端 PWA 支持

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👨‍💻 作者

个人项目 - 打造高效的待办事项管理工具

---

**提示**: 首次使用语音功能时，浏览器会请求麦克风权限，请允许以使用完整功能。
