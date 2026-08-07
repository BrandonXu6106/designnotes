---
title:
  - figma制作弹窗效果
aliases:
author:
  - Brandon
date: 2026-07-22
tags:
  - status/seed
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
## 1. 弹窗动效
基础的页面切换使用跳转实现，但很多交互的结果并不是页面的变更
Figma 提供了独立的**弹窗动效设置**
- open overlay (覆盖式跳窗)
- swap overlay (跳窗交换)
- close overlay (关闭弹窗)
![202607222220261.png|353](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607222220261.png)

## 2. 实操方法
方法一：(一整个页面)
1. 设置动效：open overlay(弹窗-覆盖)
2. 调整跳窗页面背景与透明度
   ![202607222229132.png|258](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607222229132.png)


方法二：(独立的组件frame)
1. 单独把弹窗组件复制出来，创立为==frame==
2. 设置动效：==open overlay==
	- 在设置面板，可设置效果
		- 背景色：==add background== (颜色+透明度)
		- 关闭方式：close when clicking outside (点击空白处)
		- 位置：手动/预设
- 多级跳窗：swap overlay 


> [!summary] 拓展 - 自动弹窗(自动触发)
> 1. **触发事件**：==after delay== - 设置多少ms后自动发生
> 2. **设置动效**：==over delay== - 跳窗



---
- 下一页：[[ToC Course/10. 动效设计/figma变量样式调整|figma变量样式调整]] 