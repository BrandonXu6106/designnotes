---
title:
  - 局部重绘与G-dino自动化抠图工作流
aliases:
author:
  - Brandon
date: 2026-08-30
tags:
  - status/seed
  - comfyui
  - tchr/小王子
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
## 高效局部重绘-flux pf8 dev
✔ **遮罩高斯模糊** 
![435](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/20260830163250706.png)
连接checkpoints和k采样器

✔ **差异扩散**- 连接checkoutloader    和 k采样器
![443](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/20260830163508263.png)

✔ **内部模型条件** 内部蒙版区域细化处理
![397](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/20260830163607823.png)

遮罩编辑器
- 画笔大小: 按住⌥键, 左右滑动右键
- 画笔硬度: 按住⌥键, 上下滑动右键 
- 擦出: 右键
- 涂抹: 左键


[[ComfyUI/高清放大]]