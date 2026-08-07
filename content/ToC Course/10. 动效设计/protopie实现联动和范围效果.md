---
title:
  - protopie实现联动和范围效果
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
## 1. 联动和范围
多数交互动效的触发和反馈关系简单，但 Protopie 提供了==联动和范围==的方法
![202607231651639.png|575](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231651639.png)

**联动**：属性B 同步 属性A 的数值，实时运动——导航条
**范围**：要满足某个属性值的范围才触发反馈——向下滚动一定长度的页面，才触发隐藏 tab bar；拖动图标到特定区域范围，才触发缩小图标

## 2. 联动实现方法
**滚动触发top bar的出现**
- 触发对象：滚动容器
- 触发事件：==联动==
	- 动效类型： ==透明度== (top bar)
	  ![202607231710300.png|316](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231710300.png)
		- 设置==透明度==变化：0 → 100
		- 设置滚页==范围==：0 → 200→定值
		  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231709826.png)


> [!success] 滑动的注意点 (vs滚动)
> ⭐滑块的本质：**一段距离一段距离**的滑动，可以自定义段距离，所以就出现了下面的**细节点**
> - 确保每滑动一段后==不发生滑块的偏移==：拖动滑动视图框时，末尾加一个间距的长度
> ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231728461.png)
> - 确保滑动到末尾时，==最后的滑块尽量居中==显示：制作滑动容器时候，末尾添加一块透明矩形(长度=间距)
>   ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231735666.png)


**滑动触发进度点的变色**
- 触发对象：第二个点
- 触发事件：联动——(容器层/滚页)
  ![202607231743505.png|373](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231743505.png)
- 产生动效：颜色值(第二个点)
	- 滚页范围：0→369 (自定义的段距离)
	- 颜色值变化范围：设置两个颜色值
	  ![202607231748440.png|333](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231748440.png)


## 3. 范围实现方法
功能点：满足数值范围要求，则触发效果
- 大于/小于/之间/之外
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607231758140.png)

>TIPS：需额外设置==效果消失==的==范围==


> [!tip] principle补充
> - principle可以==实现联动==效果，但==没有范围==
> 	- 设置页面内某个元素左右滑动：选中页面，编组并调整位置大小(即视窗)，在左侧边栏设置**水平**：**页面** (翻译不准确，应翻译为翻页/滑动)
> 	  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232024256.png)
> 	- 每添加一个滑动元素，上方就会出现一个==联动轴==，在该轴的下级，设置与该滑动元素联动的其他图层元素 (添加关键帧)
> 	  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232039749.png)



---
- 下一页：[[ToC Course/10. 动效设计/protopie变量实现数值计算|protopie变量实现数值计算]] 