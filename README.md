# 姚瑶个人网站

这是姚瑶的个人网站，使用 Astro 构建，并通过 GitHub Pages 发布。

## 本地开发

```powershell
npm install
npm run dev
```

本地预览地址：

```text
http://127.0.0.1:4321/
```

## 构建

```powershell
npm run build
```

构建产物会生成到：

```text
dist/
```

## 目录结构

```text
src/
  components/     可复用 UI 组件
  data/           导航和卡片数据
  layouts/        页面布局
  pages/          页面路由
  styles/         全局设计系统和样式
public/
  assets/         静态图片
  scripts/        浏览器脚本
```

## 发布

GitHub Actions 会在 push 到 `main` 后：

1. 安装依赖
2. 运行 `npm run build`
3. 把 `dist/` 发布到 `gh-pages` 分支

线上地址：

```text
https://yaoyao-ict.github.io/
```

## 页面路径

```text
/
/projects/
/projects/automation/
/projects/data/
/writing/
/writing/deployment/
/writing/career/
/about/
/contact/
```
