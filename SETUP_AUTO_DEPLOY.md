# ⚡ 设置自动部署（可选）

如果你想要每次推送代码时自动部署到 Vercel，按照以下步骤设置。

---

## 📋 前提条件

- ✅ 已经通过方法 1 或方法 2 完成首次部署
- ✅ 有 Vercel 账号并已登录

---

## 🔧 设置步骤

### 1. 获取 Vercel Token

1. **访问 Vercel Tokens 页面**
   - https://vercel.com/account/tokens

2. **创建新 Token**
   - 点击 "Create Token"
   - Token Name: `GitHub Actions`
   - Scope: 保持默认（Full Account）
   - Expiration: No Expiration（或选择过期时间）
   - 点击 "Create"

3. **复制 Token**
   - ⚠️ Token 只显示一次，请立即复制保存

---

### 2. 获取项目 ID 和组织 ID

#### 方式 A：从 Vercel Dashboard

1. **进入你的项目**
   - https://vercel.com/dashboard
   - 点击你的项目

2. **进入设置**
   - 点击 "Settings"

3. **获取 Project ID**
   - 在 General 页面
   - 找到 "Project ID"
   - 点击复制

4. **获取 Org ID**
   - 回到 Dashboard
   - 点击你的头像/组织名称
   - 进入 "Settings"
   - 找到 "Organization ID"
   - 点击复制

#### 方式 B：从项目设置文件

如果你已经在本地运行过 `vercel link`，可以从这里获取：

```bash
# 项目 ID
cat .vercel/project.json
# 会显示类似：{"projectId":"prj_xxxxx","orgId":"team_xxxxx"}

# 或直接查看
cat .vercel/project.json | grep projectId
cat .vercel/project.json | grep orgId
```

---

### 3. 添加到 GitHub Secrets

1. **访问仓库 Secrets 页面**
   - https://github.com/xiami303/todo/settings/secrets/actions

2. **添加 VERCEL_TOKEN**
   - 点击 "New repository secret"
   - Name: `VERCEL_TOKEN`
   - Secret: 粘贴刚才的 Vercel Token
   - 点击 "Add secret"

3. **添加 VERCEL_ORG_ID**
   - 点击 "New repository secret"
   - Name: `VERCEL_ORG_ID`
   - Secret: 粘贴你的 Organization ID
   - 点击 "Add secret"

4. **添加 VERCEL_PROJECT_ID**
   - 点击 "New repository secret"
   - Name: `VERCEL_PROJECT_ID`
   - Secret: 粘贴你的 Project ID
   - 点击 "Add secret"

---

## ✅ 完成！

设置完成后：

- ✅ 每次推送代码到 master/main 分支
- ✅ GitHub Actions 自动运行
- ✅ 自动构建项目
- ✅ 自动部署到 Vercel
- ✅ 用户访问时自动更新

---

## 🔍 查看部署状态

### 在 GitHub

1. 进入仓库：https://github.com/xiami303/todo
2. 点击 "Actions" 标签
3. 查看部署状态和日志

### 在 Vercel

1. 进入项目：https://vercel.com/dashboard
2. 点击你的项目
3. 查看 "Deployments" 历史

---

## 🎯 手动触发部署

如果想手动触发部署（不推送代码）：

1. **访问 GitHub Actions**
   - https://github.com/xiami303/todo/actions

2. **选择 workflow**
   - 点击 "Deploy to Vercel"

3. **运行**
   - 点击 "Run workflow"
   - 选择分支
   - 点击绿色的 "Run workflow" 按钮

---

## 📊 工作流程

```
代码推送 → GitHub 检测到更新
          ↓
      GitHub Actions 启动
          ↓
      安装依赖 (npm ci)
          ↓
      构建项目 (npm run build)
          ↓
      部署到 Vercel
          ↓
      完成！用户自动获得更新
```

---

## 🔧 故障排除

### Secrets 未正确设置？

检查：
- Secret 名称必须完全匹配（大小写敏感）
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### 部署失败？

1. 查看 GitHub Actions 日志
2. 确认 Token 有效
3. 确认 Project ID 和 Org ID 正确
4. 尝试手动运行 workflow

### Token 过期？

1. 创建新的 Vercel Token
2. 更新 GitHub Secret `VERCEL_TOKEN`
3. 重新运行 workflow

---

## 💡 提示

### 不想自动部署？

如果你不需要自动部署：
- 保持现状即可
- Vercel 仍会在 Dashboard 检测到推送
- 可以手动在 Vercel Dashboard 部署

### 只部署特定分支？

修改 `.github/workflows/deploy.yml`：

```yaml
on:
  push:
    branches:
      - main  # 只监听 main 分支
```

### 添加构建通知？

可以添加 Slack/Discord 通知：

```yaml
- name: Notify
  if: success()
  run: echo "部署成功！"
```

---

## 🎉 享受自动化部署！

设置完成后，你只需要：
1. 修改代码
2. 推送到 GitHub
3. 等待自动部署完成

一切都是自动的！🚀
