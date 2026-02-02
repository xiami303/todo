# 🚀 iPhone 快速使用指南

**5分钟让你的应用在 iPhone 上运行！**

---

## 方法一：本地预览（测试用）

适合开发测试，不推荐长期使用。

### 1. 启动本地服务器

```bash
# 在项目目录
npm run dev
```

会看到类似：
```
Local: http://localhost:5173
Network: http://192.168.1.100:5173
```

### 2. 在 iPhone 上访问

1. **确保 iPhone 和电脑在同一 WiFi**
2. **在 iPhone Safari 打开** `http://192.168.1.100:5173`
3. **允许麦克风权限**

**限制**：
- ❌ 关闭电脑后无法使用
- ❌ 换网络后无法访问
- ⚠️ HTTP 可能无法使用语音功能

---

## 方法二：Vercel 部署（推荐）

完全免费，永久可用！

### 1. 部署到 Vercel

**选项 A - 使用 Vercel CLI（最快）**

```bash
# 全局安装 Vercel CLI
npm install -g vercel

# 在项目根目录运行
vercel

# 按提示操作：
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - Project name? voice-todo-app
# - Which directory? ./
# - Override settings? No

# 部署成功后会得到网址，如：
# https://voice-todo-app.vercel.app
```

**选项 B - 使用 Vercel 网站**

1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 登录
3. 点击 "New Project"
4. 导入这个仓库
5. 保持默认设置，点击 "Deploy"
6. 等待 1-2 分钟完成部署

### 2. 在 iPhone 安装为 App

1. **iPhone 打开 Safari**
2. **访问部署的网址**（如 `https://voice-todo-app.vercel.app`）
3. **点击底部分享按钮** 📤
4. **选择"添加到主屏幕"** ➕
5. **点击"添加"**

### 3. 开始使用

1. **在主屏幕点击应用图标**
2. **点击语音按钮，允许麦克风权限**
3. **开始使用！** 🎉

---

## 方法三：GitHub Pages（免费）

适合静态托管。

### 1. 配置并部署

```bash
# 1. 安装 gh-pages
npm install --save-dev gh-pages

# 2. 在 package.json 添加 homepage
# "homepage": "https://你的用户名.github.io/仓库名"

# 3. 添加部署脚本到 package.json scripts
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# 4. 部署
npm run deploy
```

### 2. 配置 vite.config.ts

添加 base 配置：

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/仓库名/',  // 替换为你的仓库名
})
```

### 3. 在 GitHub 启用 Pages

1. 仓库 Settings → Pages
2. Source 选择 `gh-pages` 分支
3. 点击 Save
4. 访问 `https://你的用户名.github.io/仓库名`

---

## 方法四：Netlify（免费）

### 1. 快速部署

1. 访问 [netlify.com](https://netlify.com)
2. 用 GitHub 登录
3. "New site from Git"
4. 选择仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy site

### 2. 在 iPhone 安装

同方法二步骤 2。

---

## 📱 使用技巧

### 语音输入最佳实践

1. **环境**：安静的地方
2. **距离**：手机距离嘴巴 15-30cm
3. **语速**：正常说话即可
4. **示例**：
   - "明天下午三点开会"
   - "买牛奶和面包"
   - "完成项目文档"

### 离线使用

应用支持离线使用（PWA）：
- ✅ 首次访问后自动缓存
- ✅ 无网络也能查看和管理任务
- ✅ 联网后自动同步

---

## 🔧 常见问题

### 无法添加到主屏幕？

- ✅ 必须使用 **Safari 浏览器**
- ✅ 网站必须是 **HTTPS**（Vercel/Netlify 自动提供）
- ✅ 确保没有在"无痕模式"

### 语音功能不工作？

1. 检查麦克风权限：
   - 设置 → Safari → 麦克风
2. 确保网站是 HTTPS
3. 重新加载页面

### 数据会丢失吗？

- ✅ 数据保存在浏览器本地
- ⚠️ 清除浏览器数据会丢失任务
- 💡 建议定期截图备份重要任务

---

## 🎯 推荐流程

**第一次使用？按这个顺序：**

1. ✅ **本地测试**（方法一）- 2分钟
   - 快速看看效果

2. ✅ **部署到 Vercel**（方法二）- 5分钟
   - 获得永久可用的网址

3. ✅ **添加到 iPhone 主屏幕** - 1分钟
   - 像真正的 App 一样使用

**总用时：8分钟** ⏱️

---

## 📞 需要更多帮助？

- 📖 查看完整文档：`IOS_INSTALLATION_GUIDE.md`
- 🌐 Capacitor 原生应用：需要 Mac 和 Xcode

---

**现在就开始吧！选择上面任一方法，让应用在你的 iPhone 上运行！** 🚀
