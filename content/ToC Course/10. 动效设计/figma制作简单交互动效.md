---
title:
  - figma制作简单交互动效
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
## 1. 关键帧动画
>Figma除了基本跳转，也可以实现关键帧动画

关键帧动画的实现，需要创建**两个画布**
- 动画要点
	- ==图层一致(命名/顺序/元素)==
	- ==属性不同==

![202607230221706.png|384](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230221706.png)

## 2. 实现方式
>关键设置：设置跳转动效的**动画类型**——==smart animate

方法：
1. ⭐复制粘贴页面，命名(关键帧1、关键帧2)
2. 在关键帧2页面上，移走需要隐藏的元素
	- 优化视觉效果：可以移动到画面一半的位置，设置透明度0
3. 在关键帧2页面上，单独保留需要保留的元素，可以进行位置大小的变换
4. ⭐把额外需在关键帧页面2上显示的元素，先复制到关键帧1页面外，再复制到2页面里面摆好位置
5. 设置元素出现的适合的动画类型
6. 设置两个关键帧页面跳转动效的**动画类型**——==smart animate==



---
- 下一页：[[ToC Course/10. 动效设计/figma制作复杂交互动效|figma制作复杂交互动效]] 