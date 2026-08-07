---
title:
  - figma变量样式调整
aliases:
author:
  - Brandon
tags:
  - status/seed
  - 动效
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
## 1. 变量编辑器
Figma 中提供了变量 Variable 编辑器，控制色彩、文本、数值、布尔四种类型
![202607222253059.png|400](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607222253059.png)

变量除了代替样式作为 [[Scratch/专业B端设计师要懂的DesignToken概念解析|DesignToken]] 使用，还可**结合交互功能**实现更丰富的交互效果
![202607222255074.png|383](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607222255074.png)

> [!tip] 打开变量编辑器的方法
> - 左侧竖向导航栏，找到 **Variables（变量图标）**，点击直接打开变量编辑器面板
>   ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230027597.png)



## 2. 交互效果—实现色彩切换
**不同的色彩方案的建立**
- 新建颜色**变量名**
	![202607222353459.png|376](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607222353459.png)
- 在变量编辑器里，一个变量名可以对应**多个值**，每一列的值又对应一种模式(深色/浅色)
	![202607230010014.png|451](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230010014.png)

**深色模式和浅色模式切换的实现**
1. 触发事件：on click
   ![161](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230014855.png)
2. 交互动效：==set variable mode==
	- 选择 collection (可以理解为不同的方案)
	  ![202607230002814.png|340](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230002814.png)
	- 选择==模式==：深色/浅色
	  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230004875.png)



---
- 下一页：[[ToC Course/10. 动效设计/Figma实现条件判定和表达式|Figma实现条件判定和表达式]] 
