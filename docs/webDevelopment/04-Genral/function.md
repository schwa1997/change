---
sidebar_position: 1
title: run-script
---

1. **npm (Node Package Manager)**

   - `npm run scriptName` 用于运行 package.json 中定义的脚本
   - 特别是 `npm run start` 这个常用命令
   - 主要用于 Node.js 和 Next.js 项目
     > npm run start

2. **npx + nx**

   - `npx nx run projectName:serve` 用于运行 Nx 工作空间中的项目
     > npx nx run nemo:serve
     > npx nx run nemo-crm:serve

3. **Angular CLI**

   - `ng serve` 用于启动 Angular 开发服务器
   - 这些配置定义在 angular.json 中
     > ng serve

4. **PHP**

   - `php -S scriptName` 用于运行 Laravel 框架的命令
   - 这些脚本在 composer.json 中定义
     > php82 -S 127.0.0.1:8000 -t public/ public/index.php

5. **Git 常用命令**
   - `git add .` 添加所有更改的文件到暂存区
   - `git commit -m "commit message"` 提交更改并添加提交信息
   - `git push origin branchName` 推送到远程仓库的指定分支
