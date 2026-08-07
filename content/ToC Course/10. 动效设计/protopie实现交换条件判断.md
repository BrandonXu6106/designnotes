---
title:
  - protopie实现交换条件判断
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
## 1. 条件判断
一个操作可以通过条件导向不同结果，而 Protopie 就提供了条件判断的功能
![202607240314682.png|417](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240314682.png)

条件判断的**应用逻辑**
![202607240316470.png|428](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240316470.png)

每个条件判断中可以包含多个**子条件**，父级条件需要满足所有子条件才能成立
![202607240321403.png|367](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240321403.png)

## 2. 案例演示
**页面滑动时，顶部栏和底部栏的出现和消失**
- 过去的方法：通过==范围==来实现，各添加两个透明度效果，但是较为繁琐
- 更好的方法：通过==监听==(滚页)来实现，先添加第一个==条件判断==(滚页>100)，并在下级添加透明度效果，再添加第二个条件判断(滚页<100)，并在下面添加透明度效果
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240335814.png)


**订单页的图片替换(文字同理)**
![202607240343819.png|474](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240343819.png)

**变量break自减(break=break-1)时，避免产生负数；减至0时，图标变灰**
- if( break=0) break=0：当条件为 break=0，添加赋值break = 0(而不是break = break-1)
  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240349400.png)
- 当条件为 break=0，添加透明度效果


**订单满多少，减多少**
- 新建总价变量，并赋值变量
- 监听总价，添加判断条件：当总价达到某个值，改变颜色并更换文本




---
- 下一页：[[ToC Course/10. 动效设计/AE和动效设计的基本认识|AE和动效设计的基本认识]] 
