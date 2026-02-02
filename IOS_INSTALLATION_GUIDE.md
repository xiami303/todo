# 📱 iOS 安装使用指南

本指南提供两种方式在 iPhone 上使用语音待办事项应用。

---

## 🌟 方式一：PWA 安装（推荐 - 最简单）

**无需Mac、无需Xcode、无需编译，直接在iPhone上安装！**

### 步骤 1：部署应用

首先需要将应用部署到可访问的服务器：

#### 选项 A - 使用 Vercel（推荐）

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 导入此仓库
4. Vercel 会自动检测 Vite 项目并部署
5. 获得类似 `https://your-app.vercel.app` 的网址

#### 选项 B - 使用 Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 连接 GitHub 仓库
3. 构建命令：`npm run build`
4. 发布目录：`dist`
5. 点击部署

#### 选项 C - 使用 GitHub Pages

```bash
# 安装 gh-pages
npm install --save-dev gh-pages

# 添加部署脚本到 package.json
"deploy": "npm run build && gh-pages -d dist"

# 部署
npm run deploy
```

### 步骤 2：在 iPhone 上添加到主屏幕

1. **打开 Safari 浏览器**（必须使用 Safari）
2. **访问部署后的网址**（如 `https://your-app.vercel.app`）
3. **点击底部的"分享"按钮** 📤
4. **向下滚动找到"添加到主屏幕"** ➕
5. **编辑名称**（默认为"语音Todo"）
6. **点击"添加"**

### 步骤 3：使用应用

1. **在主屏幕找到应用图标**并点击打开
2. **首次使用语音功能时**会请求麦克风权限
3. **点击"允许"**以启用语音输入

### ✨ PWA 优势

- ✅ 安装简单，无需 App Store
- ✅ 像原生应用一样运行
- ✅ 支持离线使用（Service Worker）
- ✅ 自动更新
- ✅ 无需 Mac 和 Xcode
- ✅ 占用空间小

---

## 🔨 方式二：Capacitor 原生应用（需要 Mac）

**构建真正的 iOS 原生应用，可上架 App Store**

### 前置要求

- ✅ macOS 系统（必需）
- ✅ Xcode 14+ （从 App Store 免费安装）
- ✅ Apple Developer 账号（免费或付费）
- ✅ Node.js 16+

### 步骤 1：构建 Web 应用

```bash
# 确保在项目根目录
cd /workspace

# 安装依赖（如果还没安装）
npm install

# 构建生产版本
npm run build
```

### 步骤 2：同步到 iOS 项目

```bash
# 同步 Web 资源到 iOS 项目
npm run cap:sync:ios
```

这个命令会：
- 构建 Web 应用
- 复制到 iOS 项目的 `public` 目录
- 更新 Capacitor 配置

### 步骤 3：在 Xcode 中配置

```bash
# 打开 Xcode 项目
npm run cap:open:ios
```

在 Xcode 中：

1. **选择项目** → App → Signing & Capabilities
2. **Team**: 选择你的 Apple Developer 账号
3. **Bundle Identifier**: 建议改为 `com.yourname.voicetodo`
4. **配置麦克风权限**：
   - 打开 `Info.plist`
   - 添加 `Privacy - Microphone Usage Description`
   - 值设为：`需要访问麦克风以支持语音输入功能`

### 步骤 4：在模拟器中测试

1. **选择模拟器**：顶部选择 iPhone 14 或其他型号
2. **点击运行按钮** ▶️ 或按 `Cmd + R`
3. **等待编译和启动**

**注意**：模拟器不支持真实麦克风，语音功能需要在真机测试。

### 步骤 5：在真机上运行

1. **用 USB 连接 iPhone 到 Mac**
2. **在 iPhone 上信任此电脑**
3. **Xcode 顶部选择你的 iPhone**
4. **点击运行** ▶️

首次运行：
- iPhone 会提示"不受信任的开发者"
- 前往：设置 → 通用 → VPN与设备管理
- 信任你的开发者证书

### 步骤 6：发布到 App Store（可选）

如果想上架 App Store：

1. **加入 Apple Developer Program**（99美元/年）
2. **准备应用资源**：
   - 应用图标（1024x1024px）
   - 截图
   - 应用描述
3. **在 Xcode 中归档**：Product → Archive
4. **上传到 App Store Connect**
5. **提交审核**

---

## 📋 两种方式对比

| 特性 | PWA | Capacitor 原生应用 |
|------|-----|-------------------|
| **需要 Mac** | ❌ 不需要 | ✅ 需要 |
| **需要 Xcode** | ❌ 不需要 | ✅ 需要 |
| **安装难度** | ⭐ 非常简单 | ⭐⭐⭐⭐ 复杂 |
| **App Store** | ❌ 不能上架 | ✅ 可以上架 |
| **安装方式** | Safari 添加 | TestFlight/App Store |
| **离线支持** | ✅ 支持 | ✅ 支持 |
| **语音识别** | ✅ 支持 | ✅ 支持 |
| **更新方式** | 自动更新 | 需要重新构建 |
| **开发成本** | 免费 | 需要开发者账号 |
| **性能** | 优秀 | 优秀 |

---

## 🎤 语音功能说明

### 支持的浏览器/环境

- ✅ Safari（iOS 14.5+）
- ✅ Chrome（iOS）
- ✅ Capacitor 应用

### 首次使用

1. **点击语音按钮**
2. **允许麦克风权限**（仅首次）
3. **清晰说话**，应用会实时识别

### 使用技巧

- 🔇 在安静环境下使用
- 🗣️ 正常语速说话
- 📱 手机距离嘴巴 15-30cm
- ⚡ 说完后会自动停止识别

### 识别语言

- 默认：中文（普通话）
- 可修改 `src/hooks/useSpeechRecognition.ts` 支持其他语言

---

## 🔧 故障排除

### PWA 方式

**问题：无法添加到主屏幕**
- ✅ 确认使用 Safari 浏览器
- ✅ 确认网站使用 HTTPS
- ✅ 确认 manifest.json 正确加载

**问题：语音不工作**
- ✅ 检查麦克风权限：设置 → Safari → 麦克风
- ✅ 确认网站使用 HTTPS
- ✅ 尝试刷新页面

**问题：应用不离线工作**
- ✅ 至少访问一次网站让 Service Worker 安装
- ✅ 检查浏览器控制台是否有错误

### Capacitor 方式

**问题：Xcode 编译失败**
```bash
# 清理并重新构建
cd ios/App
pod deintegrate
pod install
```

**问题：真机无法运行**
- ✅ 确认 iPhone 已信任开发者
- ✅ 确认 Signing 配置正确
- ✅ 尝试重启 Xcode 和 iPhone

**问题：语音功能不工作**
- ✅ 确认添加了麦克风权限描述
- ✅ 首次使用时允许权限
- ✅ 检查设置 → 隐私 → 麦克风

---

## 📱 系统要求

### PWA 方式
- iOS 14.5 或更高版本
- Safari 14.1 或更高版本

### Capacitor 方式
- iOS 13.0 或更高版本
- macOS 12+ （开发需要）
- Xcode 14+

---

## 🎯 快速开始建议

### 个人使用（推荐 PWA）
1. 部署到 Vercel（5分钟）
2. iPhone Safari 添加到主屏幕（1分钟）
3. 开始使用 ✅

### 团队分发/商业用途（Capacitor）
1. 准备 Mac 和 Xcode
2. 构建并测试应用
3. 通过 TestFlight 分发
4. 或提交到 App Store

---

## 📞 需要帮助？

### PWA 相关
- 查看浏览器控制台错误信息
- 确认 HTTPS 正确配置
- 检查 manifest.json 和 Service Worker

### Capacitor 相关
- 查看 Xcode 控制台日志
- 参考 [Capacitor 官方文档](https://capacitorjs.com/docs/ios)
- 检查 iOS 系统日志

---

**🎉 现在开始在你的 iPhone 上使用语音待办事项应用吧！**

推荐：**先使用 PWA 方式**快速体验，如需上架 App Store 再考虑 Capacitor 方式。
