---
title:
  - 图生图基础工作流+人物转绘+controlnet线稿
aliases:
author:
  - Brandon
date: 2026-08-26
tags:
  - status/seed
  - comfyui
  - tchr/小王子
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
图生图作用: 
1.风格转绘
2.让画面更丰富
3.图像高清化
4.局部修复
5.图片扩充

✔ **Load Image** 加载图像
✔ **VAE Encode** (vae编码器): 像素空间转到潜在空间的桥梁

✔ **Repeat Latent Batch** (复制latent批次): 即 batch_size

denoise: 降噪, 即重绘幅度
数值越高, 图像和原图越不相似   
数值越低, 图像和原图越相似

✔ **Upscale Image** 图像缩放

✔ **Image Comparer** (rgthree) 新旧图像对比

controlnet 控制网 
✔ **Apply ControlNet** : strength强度--类似降噪, 强度越高, 越像原图片
✔ **Load ControlNet Model**: 和大模型版本一致, 1.5和2.1版本可以互通, XL模型有专门的XL contrlnet 


✔ **Realistic Lineart**：Lineart艺术线条预处理
coarse: 粗糙度
resolution: 分辨率--管控细节

[[ComfyUI/提示词自动化书写]]