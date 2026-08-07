---
title:
  - protopie实现简单跳转
aliases:
author:
  - Brandon
date: 2026-07-23
tags:
  - status/seed
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
> [!summary] 免费版本和付费建议
> - 只能创建2个文件，每个文件只能2个场景
> - 在上班时需要用的时候额外开通一个月 (公司报销)

**学习策略**：[官方文档](https://www.protopie.io/zh-cn/learn/docs/introducing-protopie-getting-started)包含详细的**中文功能文档**，对中文用户非常友好

## 1. 界面认识
三个核心窗口
![202607230308717.png|601](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230308717.png)

## 2. 操作模式
![202607230312716.png|579](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230312716.png)
1. ==导入==并调整图层
2. 添加==交互==和==动画==
3. ==检查==并调试效果


## 3. 交互动效的制作逻辑
![202607230314940.png|591](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230314940.png)


## 演示
先设置机型
![202607230329321.png|306](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230329321.png)

**导入方法**
- ❌方法一：运行figma中的相应protopie插件，点击export——图层太多
- ⭐方法二：在figma中选中，以png的格式复制(3x)，粘贴到proropie中


**实现页面滚动**：
- 添加==滚动容器== (本质是编组)
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230337818.png)
- 在右下角设置：滚动、方向
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230343794.png)


**实现滑片左右滑动效果**：
- 单独以png格式，将该滑片复制到protopie
- 创建编组，设置为滑动，方向为左右，并调整视图显示宽度
- ⭐把该滑片编组==拖动嵌套==到页面滑动编组里，再调整到相应位置，覆盖底图
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230356081.png)
  


**页面跳转实现**：
- 制作热区
	- ✔将==填充色==透明度设置为0，❌而不是总体透明度
	  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230404531.png)
- 设置单击时，==转场==动效


> [!info] Protopie&Principle
> Protopie 中包含场景跳转进行页面切换
> Principle ==只支持复杂交互动效==不支持跳转



---
- 下一页：[[ToC Course/10. 动效设计/protopie实现基础交互动效|protopie实现基础交互动效]] 