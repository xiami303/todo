# 语音待办事项应用

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xiami303/todo)

一个现代化的个人待办事项应用，支持语音输入功能。使用 React + TypeScript + Vite 构建，支持 PWA，可以像原生应用一样安装到手机主屏幕。

## 核心功能

- 🎤 **语音输入** - 支持中文语音识别，快速创建任务
- ✅ **任务管理** - 添加、编辑、删除、完成任务
- 🎯 **优先级管理** - 高、中、低三级优先级
- 📁 **分类管理** - 个人、工作、购物、健康、其他
- 🔍 **搜索筛选** - 快速查找任务
- 📊 **数据统计** - 实时显示完成情况
- 💾 **本地存储** - 数据自动保存，不会丢失
- 📱 **PWA 支持** - 可安装到主屏幕，离线使用

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **语音识别**: Web Speech API
- **数据存储**: LocalStorage
- **部署平台**: Vercel

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署到 Vercel

### 方式一：一键部署（推荐）

点击上方的 "Deploy with Vercel" 按钮，按照提示完成部署。

### 方式二：命令行部署

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel
```

## 在 iPhone 上安装

部署成功后，在 iPhone 上安装 PWA 应用：

1. 用 **Safari 浏览器**打开部署的网址
2. 点击底部中间的**分享按钮** 📤
3. 向下滚动，找到**"添加到主屏幕"** ➕
4. 点击**"添加"**
5. 在主屏幕打开应用图标
6. 允许麦克风权限
7. 开始使用语音输入！

## 使用说明

### 语音输入

1. 点击"点击开始语音输入"按钮
2. 允许浏览器访问麦克风
3. 清晰地说出待办事项
4. 识别完成后，选择优先级和分类
5. 点击"添加任务"

### 任务管理

- **添加任务**: 使用语音输入或手动输入
- **完成任务**: 点击任务前的复选框
- **删除任务**: 点击任务右侧的删除按钮
- **筛选任务**: 使用顶部的筛选面板

### 语音输入示例

- "明天上午十点开部门会议"
- "周五前完成项目报告"
- "买鸡蛋、牛奶和面包"
- "每天早上七点跑步"

## 浏览器兼容性

语音识别功能需要浏览器支持 Web Speech API：

- ✅ Chrome (推荐)
- ✅ Edge
- ✅ Safari (iOS)
- ❌ Firefox (不支持)

## 项目结构

```
voice-todo-app/
├── public/              # 静态资源
│   ├── icons/          # PWA 图标
│   ├── manifest.json   # PWA 配置
│   └── sw.js           # Service Worker
├── src/
│   ├── components/     # React 组件
│   │   ├── AddTodoForm.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── Stats.tsx
│   │   ├── TodoItem.tsx
│   │   └── VoiceButton.tsx
│   ├── hooks/          # 自定义 Hooks
│   │   └── useSpeechRecognition.ts
│   ├── utils/          # 工具函数
│   │   └── storage.ts
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 应用入口
│   ├── types.ts        # TypeScript 类型定义
│   └── index.css       # 全局样式
├── index.html          # HTML 模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── vercel.json         # Vercel 部署配置
```

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题或建议，请提交 Issue。
