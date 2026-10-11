---
title:
  - turbo lighting lcm 实时渲染
aliases:
author:
  - Brandon
date: 2026-08-27
tags:
  - status/seed
  - comfyui
  - tchr/小王子
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
安装扩展: **mixlab**
模型下载:
**turbo模型**: [sdxl-turbo ](https://huggingface.co/stabilityai/sdxl-turbo/tree/main) [DreamShaper XL v2.1 Turbo 闪电](https://www.liblib.art/modelinfo/1f74485deaf842d094054d5c75348879?from=search&versionUuid=92802afed001405a8aa23d1397fe70c2)
turbo模型特点: 仅需4-8步, 快速出图, 比sdxl快100倍

**lighting模型**: [SDXL-Lightning](https://huggingface.co/ByteDance/SDXL-Lightning)  [juggernautXL_v9-Lightning_4S](https://www.liblib.art/modelinfo/46f237eda12144fd958eefdfda223501?from=search&versionUuid=84d2b9cc66bf4953bd9f9c4c152eb6cb)
尺寸: 1024 1024(模型决定)
step: 4-8
CFG: 1-2
scheduler: 根据推荐

**lcm模型**:  [LCM&TurboMix XL加速 LoRA](https://www.liblib.art/modelinfo/520e4ed3ec1d4709aca0f698a02f62f7?from=search&versionUuid=14962ac6cd934398a9c237594f2696b7) 
LCM特点: Low Compute Model, 是一款对核心算法进行了深度优化的微调模型, 可以大幅度减少生图所需的计算数量
[pytorch_lora_weights.safetensors](https://huggingface.co/latent-consistency/lcm-lora-sdv1-5/blob/main/pytorch_lora_weights.safetensors)


出图质量对比: SDXL原版>LCM Lora>Turbo>Lighting
出图速度对比: LCM Lora>Lighting>Turbo>SDXL原型


✔ **Screen Share ♾️Mixlab** 屏幕分享
专门识别本地任意网页或软件页面的节点, 作为实时预览的识别窗口
✔ **Floating Video ♾️Mixlab** 屏幕窗口
可以实现在任意一个软件或网页内, 实时监测你ComfyUI生成出来的图片, 可以代替preview image

[[ComfyUI/抠图与局部分割]]