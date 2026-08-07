---
title:
  - figma完整交互流程实现
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
## 1. 页内交互
通过对**组件**进行**设置**实现页内交互
![202607221739177.png|361](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221739177.png)

## 2. 案例
启动页(初始页)的高度：==同机型高度==
- 后续所有跳转页面，都会移至延用这个尺寸高度，作为==视窗高度==
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221744931.png)


如何使 tab bar 在视图窗口中显示(以首页为例)
- **方法一(把tab bar拖动视窗范围里，并禁止其滚动)**：
	1. **重新地位**：根据与视窗高度等高的页面中的tab bar的位置，找出其对应的==y轴坐标==，把首页中tab bar也==拖动到==对应y轴位置处，使得 tab bar 能够在视窗中能够显示
	   ![202607221752817.png|207](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221752817.png)
	2. **固定位置**：选中该tab bar组件，在prototype中，设置其position：==fixed==(固定位置)
	   ![209](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221756997.png)
- **方法二(定义能滚动overflow的区域)**：
	1. **页面高度**：==缩小==到对应机型定义的高度 
	2. **创立滚动视窗**：选中页面中除了tab bar的所有元素，右击创建为==frame==，缩小调整区域大小位置——视窗内的所有元素可以滚动
	3. **设置滚动方向**：选中该frame，在prototype中，设置==overflow==：vertical(垂直)
	4. **TIPS**：注意模块的优先级，如果页面中有不需要滚动的模块，对应的图层需要放置在滚动视图frame的上方
  

> [!note] 水平滚动区域设置
> **左右边界限定**：设置恰好在一个组件的大小
> ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607222136568.png)



---

- 下一页：[[ToC Course/10. 动效设计/figma制作弹窗效果|figma制作弹窗效果]] 




 