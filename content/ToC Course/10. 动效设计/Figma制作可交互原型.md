---
title:
  - Figma制作可交互原型
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
## 1. Figma的简单动效
>Figma 做为 UI 设计工具自带简单的页面跳转、交互功能
>Figma优点：可交互、多平台、可分享


Figma实现动效的主要内容
- **交互对象**：触发交互的对象
- **触发方式**：
	- on click、on drag、while hovering、while pressing、key/Gampad 按键/手柄
	- Mouse enter 鼠标移入、Mouse leave 移除、Mouse down 按下、Mouse up 松开
	- After delay
- **跳转对象**：Navigate to
	- 除了跳转外，还可以实现变量设置、参数设置、滚动、链接跳转...
- **动画效果**：
	- Instant
	- Dissolve 渐隐渐现
	- Smart animate
	- Move in
	- Move out
	- Push
	- Slide in
	- Slide out


## 2. 动效实现
> [!tip] 
> 操作前，需要==新建画布==，复制页面，不要在原画布里完成 
> **先**完成**连线**，**最后**设置添加**效果**


技巧1：在设置的同时、能够小窗**悬浮浏览**效果
- 设置交互流程起点，点击页面右上角图标，可以悬浮预览
  ![202607221711464.png|340](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221711464.png)
  ![202607221714060.png|341](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221714060.png)


技巧2：底部**导航跳转**的**热区**制作
- 额外创建一个触发区，复制粘贴覆盖到各个页面底部栏，避免一个一个页面设置，提高效率
  ![202607221721768.png|373](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221721768.png)


技巧3：**连线**布局**整理**
- 同模块的页面放在一行，再连线
  ![202607221726829.png|489](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607221726829.png)



---
- 下一页：[[ToC Course/10. 动效设计/figma完整交互流程实现|figma完整交互流程实现]]
