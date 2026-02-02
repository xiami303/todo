# 🚀 Vercel 部署指南

你的应用已准备好部署到 Vercel！选择以下任一方式：

---

## ⚡ 方式一：一键部署（最简单）

点击下方按钮，一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xiami303/todo)

**步骤**：
1. 点击上方按钮
2. 用 GitHub 账号登录 Vercel
3. 点击 "Deploy"
4. 等待 1-2 分钟完成部署
5. 获得访问网址（如 `https://xxx.vercel.app`）

---

## 🌐 方式二：通过 Vercel 网站

### 1. 访问 Vercel

打开浏览器访问：https://vercel.com

### 2. 登录

- 使用 GitHub 账号登录
- 授权 Vercel 访问你的仓库

### 3. 导入项目

1. 点击 **"New Project"** 或 **"Add New..."**
2. 选择 **"Import Git Repository"**
3. 找到并选择 `xiami303/todo` 仓库
4. 点击 **"Import"**

### 4. 配置项目

Vercel 会自动检测配置，保持默认即可：

- **Framework Preset**: Vite
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 5. 部署

- 点击 **"Deploy"** 按钮
- 等待 1-2 分钟完成构建和部署
- 部署成功后会显示：
  - 🎉 Congratulations!
  - 访问网址（如 `https://todo-xxx.vercel.app`）

### 6. 访问应用

- 点击 **"Visit"** 按钮查看你的应用
- 或直接访问显示的网址

---

## 📱 在 iPhone 上安装

部署完成后，在 iPhone 上安装为 App：

### 步骤：

1. **打开 Safari 浏览器**
   - ⚠️ 必须使用 Safari，其他浏览器不支持

2. **访问你的网址**
   - 输入 Vercel 提供的网址
   - 如：`https://todo-xxx.vercel.app`

3. **添加到主屏幕**
   - 点击底部的 **分享** 按钮 📤
   - 向下滚动找到 **"添加到主屏幕"** ➕
   - 点击进入

4. **自定义名称**
   - 默认显示 "语音Todo"
   - 可以修改为你喜欢的名称
   - 点击右上角 **"添加"**

5. **完成！**
   - 返回主屏幕
   - 找到新添加的应用图标
   - 点击打开，像原生 App 一样使用

### 首次使用：

1. 点击 **"🎤 点击开始语音输入"** 按钮
2. 浏览器会请求麦克风权限
3. 点击 **"允许"**
4. 开始说话，体验语音输入！

---

## 🎯 配置自定义域名（可选）

如果你有自己的域名：

### 在 Vercel Dashboard：

1. 进入你的项目
2. 点击 **"Settings"**
3. 选择 **"Domains"**
4. 点击 **"Add"**
5. 输入你的域名（如 `todo.yourdomain.com`）
6. 按照提示配置 DNS 记录
7. 等待 DNS 生效（通常几分钟）

---

## 🔄 自动更新

部署后，每次你推送代码到 GitHub：

- ✅ Vercel 自动检测更新
- ✅ 自动构建新版本
- ✅ 自动部署上线
- ✅ 用户访问时自动更新

无需手动操作！

---

## ⚙️ 环境变量（可选）

如果将来需要配置环境变量：

1. Vercel Dashboard → 项目 → Settings
2. 选择 **"Environment Variables"**
3. 添加变量
4. 重新部署生效

---

## 📊 查看部署状态

### 在 Vercel Dashboard：

- **Deployments**: 查看所有部署历史
- **Analytics**: 查看访问统计（需要升级）
- **Logs**: 查看构建和运行日志
- **Speed Insights**: 性能分析

---

## 🔧 故障排除

### 部署失败？

1. **检查构建日志**
   - 在 Vercel Dashboard 查看详细错误
   - 通常是依赖安装问题

2. **本地测试构建**
   ```bash
   npm run build
   ```
   - 确保本地构建成功

3. **检查 package.json**
   - 确保所有依赖都在 dependencies 中

### 无法访问？

1. **等待 DNS 生效**
   - 初次部署需要几分钟

2. **清除浏览器缓存**
   - Safari → 设置 → 清除历史记录

3. **检查部署状态**
   - Vercel Dashboard → Deployments
   - 确认状态为 "Ready"

---

## 🎉 部署完成检查清单

- [ ] Vercel 部署成功
- [ ] 可以访问网址
- [ ] 在 iPhone Safari 打开
- [ ] 添加到主屏幕成功
- [ ] 语音功能正常工作
- [ ] 离线访问正常

---

## 📞 需要帮助？

- 📖 Vercel 文档: https://vercel.com/docs
- 📖 快速开始: [QUICK_START_IOS.md](./QUICK_START_IOS.md)
- 📖 完整指南: [IOS_INSTALLATION_GUIDE.md](./IOS_INSTALLATION_GUIDE.md)

---

**🎊 现在开始部署吧！**

推荐使用 **方式一（一键部署）** 或 **方式二（网站导入）**，都非常简单！
