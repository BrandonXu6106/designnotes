---
title:
  - Figma实现条件判定和表达式
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
## 1. 条件判定和数值计算
交互除了直接触发的方式外，往往还**根据条件**给出**不同的结果**
![202607230100585.png|474](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230100585.png)

或者在交互过程中涉及**运算**，要处理数量和价格的关系等
![202607230101904.png|428](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230101904.png)

Figma中提供了**条件判断和表达式**，用于解决交互中设置条件和数值计算
- **conditional**
![202607230059898.png|472](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230059898.png)

## 2. 案例演示
**浅色模式和深色模式图标的条件切换**
1. 把浅色模式图标独立为一个==frame==
2. 对深色模式图标创立==click on==事件，添加==open overlay==交互动效，设置覆盖对象为==浅色模式==图标
3. 利用==变量实现==深色模式在点击后==消失==——透明度变0
	- 创建变量：图标色/背景色
	  ![202607230127962.png|469](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230127962.png)
	- 在变量编辑器里，新建==一列==(隐藏)，设置透明度为0%
	  ![202607230129305.png|472](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230129305.png)
4. 在深色模式图标的==click on==事件里，再添加==set variable mode==交互动效，设置模式到==条件判断/隐藏==
5. 实现颜色切换：回到set variable mode里，设置模式到==色彩/深色模式==
6. 再对浅色模式frame，重复上述操作，实现浅色模式图标点击切换到深色模式图标，同时切换颜色


**实现特定判断条件下的页面切换**
- 填充：if()...else...
  ![202607230158598.png|344](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230158598.png)


**实现控件的自动数值计算**
- 点击后，自动-1
  ![202607230206493.png|335](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607230206493.png)



---
- 下一页：[[ToC Course/10. 动效设计/figma制作简单交互动效|figma制作简单交互动效]]  
