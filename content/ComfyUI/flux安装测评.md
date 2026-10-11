---
title: flux安装测评
aliases:
author:
  - Brandon
date: 2026-08-30
tags:
  - status/seed
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
## 1. 模型介绍
**开发团队**: 
==black forest labs==: 前stabilityai成员离职和裁掉后, 组成的新团队
训练参数是SD3模型的6倍
**模型进步**: 
图像==质量==增强: 离midjourney又进一步
==细节==增强: 手部优化
关键词==语义理解==准确性增强
生图速度增强❌

**开源的3个版本:**
flux pro (最高精度): 仅支持调用api
flux dev: 支持下载, 不可商用
flux schnell: 支持下载, 可以商用(apache2.0许可下)

## 2. 模型安装
下载网站: [flux1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) [ flux.1-schnell](https://huggingface.co/black-forest-labs/FLUX.1-schnell/tree/main)
文件下载:
1. ae.sft(共用) --- flux 的vae, 放入models/vae
2. flux大模型:  
	- flux1-dev.sft(24G) --- 是flux的原模, 放入models-unet
		- 可替代:  flux1-dev-fp8.safetensors(12G) -- 适合显存小于16, 放入models-unet
	- flux1-schnell.sft


SD3(类似flux)大模型下载 (huggingface: stable-diffusion-3-medium)
- 下载clip: clip_g.safetensors / clip_l.safetensors(主要), 放入models-clip
- 下载模型



[[ComfyUI/局部重绘与G-dino自动化抠图工作流|局部重绘与G-dino自动化抠图工作流]]
