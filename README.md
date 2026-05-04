# 我的厨房手札

一个用 Astro 做的 Markdown 菜谱网站。

## 本地开发

```sh
npm install
npm run dev
```

## 新增一道菜

1. 在 `src/content/recipes/` 里新增一个 Markdown 文件，例如 `beef-noodles.md`。
2. 在 `public/images/` 里放一张对应图片。
3. 按下面格式填写菜谱信息。

```md
---
title: 牛肉面
image: /images/beef-noodles.jpg
tags: [主食, 面食, 下饭]
time: 60 分钟
difficulty: 中等
servings: 2 人份
summary: 一句话描述这道菜。
---

## 食材

- 牛肉 300g

## 做法

1. 写步骤。

## 小贴士

写一点经验。
```

首页会自动读取所有菜谱，并根据 `tags` 生成筛选按钮。

## 部署到 GitHub Pages

这个项目已经包含 `.github/workflows/deploy.yml`。推到 GitHub 后，到仓库 Settings -> Pages，把 Source 选成 GitHub Actions。
