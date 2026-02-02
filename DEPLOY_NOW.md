# 🚀 立即部署 - 3 种简单方法

由于 Vercel CLI 需要浏览器交互授权，我为你准备了 **3 种超简单的部署方法**，无需命令行！

---

## ⭐ 方法 1：一键部署（最快 - 推荐）

### 步骤：

1. **点击下方按钮**：

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xiami303/todo)

2. **登录 Vercel**
   - 使用 GitHub 账号登录

3. **配置项目**
   - Repository Name: `voice-todo-app`（或自定义）
   - 保持其他默认设置

4. **点击 Deploy**
   - 等待 1-2 分钟

5. **完成！**
   - 复制生成的网址
   - 如：`https://voice-todo-app-xxx.vercel.app`

**用时：2 分钟** ⏱️

---

## 🌐 方法 2：通过 Vercel 网站

### 步骤：

1. **访问 Vercel**
   - 打开：https://vercel.com

2. **登录**
   - 使用 GitHub 账号登录

3. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 搜索并选择 `xiami303/todo`
   - 点击 "Import"

4. **配置（保持默认）**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **部署**
   - 点击 "Deploy"
   - 等待完成

6. **获取网址**
   - 部署成功后复制网址

**用时：3 分钟** ⏱️

---

## 📱 方法 3：通过 GitHub Actions（自动化）

我已经为你准备好配置，你只需要：

### 步骤：

1. **获取 Vercel Token**
   - 访问：https://vercel.com/account/tokens
   - 点击 "Create Token"
   - 命名：`GitHub Actions`
   - 复制生成的 token

2. **添加到 GitHub Secrets**
   - 访问：https://github.com/xiami303/todo/settings/secrets/actions
   - 点击 "New repository secret"
   - Name: `VERCEL_TOKEN`
   - Value: 粘贴刚才的 token
   - 点击 "Add secret"

3. **获取项目信息**
   ```bash
   # 在本地运行（如果你有 Vercel CLI）
   vercel link
   ```

4. **添加更多 Secrets**
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

5. **推送代码**
   - 每次推送自动部署

**适合：想要自动化部署的用户**

---

## 🎯 我的推荐

### 第一次部署？
👉 **使用方法 1（一键部署）**
- 最简单
- 最快速
- 不会出错

### 经常更新代码？
👉 **先用方法 1，之后自动更新**
- Vercel 会自动检测 GitHub 推送
- 自动构建和部署
- 无需手动操作

---

## 📱 部署完成后：在 iPhone 上安装

无论用哪种方法，部署完成后：

### 步骤：

1. **复制 Vercel 网址**
   - 如：`https://voice-todo-app-xxx.vercel.app`

2. **在 iPhone Safari 打开**
   - 输入网址访问

3. **添加到主屏幕**
   - 点击底部分享按钮 📤
   - 选择"添加到主屏幕" ➕
   - 点击"添加"

4. **开始使用**
   - 像原生 App 一样使用
   - 允许麦克风权限
   - 开始语音输入！

---

## ✅ 部署完成检查

部署成功后，你的应用会有：

- ✅ HTTPS 安全连接
- ✅ 全球 CDN 加速
- ✅ 自动更新（推送代码后）
- ✅ 永久免费
- ✅ 可在任何设备访问

---

## 🎤 测试语音功能

部署后立即测试：

1. 访问你的网址
2. 点击 "🎤 点击开始语音输入"
3. 允许麦克风权限
4. 说："明天下午三点开会"
5. 看到文字自动填充 ✨

---

## 🔗 相关链接

- **Vercel Dashboard**: https://vercel.com/dashboard
- **你的 GitHub 仓库**: https://github.com/xiami303/todo
- **Vercel 文档**: https://vercel.com/docs

---

## 💡 小提示

### 自定义域名
部署后可以添加自定义域名：
1. Vercel Dashboard → 项目 → Settings → Domains
2. 添加你的域名
3. 配置 DNS
4. 完成！

### 查看访问统计
- Vercel Dashboard → 项目 → Analytics
- 查看访问量、性能等数据

### 回滚版本
- Vercel Dashboard → 项目 → Deployments
- 点击任意历史版本
- 点击 "Promote to Production"

---

## 🚀 现在就开始！

**最快方式：**

1. 点击一键部署按钮 ⬇️

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xiami303/todo)

2. 登录并点击 Deploy

3. 2 分钟后完成！

---

**祝你部署顺利！** 🎉
