---
title:
  - protopie变量实现数值计算
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
## 1. 变量
Protopie 中同样提供了**变量** Variable，用于==记录==、==计算==、==输出==特定类型数据
![202607232042815.png|618](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232042815.png)

变量包含两种**属性类型**
- 应用范围：全局变量、场景变量
- 数据类型：数字、文字、颜色


变量**使用场景**
- 表单判断：登录页面
- 价格计算：购物车结算页面
- 数据传递：订单备注
- 计时器


变量**使用方法**：
- 设置默认值
- 变量赋值
- 变量输出
- 应用表达式
- 条件判断


## 2. 使用案例
> [!success] 前提准备：
> 把页面中需要读取和计算的==数字都删除==，==再导入==到protopie中
> ![202607232205721.png|289](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232205721.png)


### 2.1. 类型一：数据传递显示，不计算
1. **数据赋值变量**——在**⭐触发事件页面**
	- 创立存储数据的容器：==变量==—room_price
	- 在触发对象页面添加：==fx赋值==
		- ==选择==变量：room_price
		- ==表达式==：899
		  ![202607232224182.png|400](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232224182.png)
	- TIPS：点击变量名右下角图标，可以弹出**变量值实时显示标签**
	  ![202607232230433.png|251](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232230433.png)
2. **变量数据加载显示**——在**⭐跳转页面**
	- ==新建文本(房间价格)==，放置对应位置
	  ![202607232234529.png|206](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232234529.png)
	- 条件性触发：==自动加载==(不需要点击)
		- ==动效类型==：文本(即文本替换效果)
			- ⚠️注意：不是**❌赋值**，赋值只针对于变量(即容器存储效果)
		- ==图层选择==：房间价格
		- ==传递变量值==(传递容器内存储的数值，而不是传递定值)：==表达式==——room_price
		  ![202607232248868.png|444](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232248868.png)
		- ⭐==加载方式==：
			- 选择==转场同时开始自动加载==：避免转场后，数据闪动一下
			- ☑️==重新加载==(每次返回页面，再次点击跳转后，都会重新加载数值)
			  ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232257801.png)


### 2.1. 类型二：点击后，实现数据自增
1. 新建==文本==(早餐数)
   ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232301907.png)
2. 新建==变量==：break
	-  添加==变量默认值==：2
	   ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232313818.png)
3. 创立==热区==(早餐+ & 早餐-)：在最后透明度改为0
   ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607232306646.png)
4. 数据自增后赋值给变量
	- 添加==点击触发==(对热区——早餐+)
		- 动效类型：==赋值==
		- 变量：==break==
		- 表达式：==break + 1==
			- TIPS：赋值可以进行加减乘除，但是文本不行，详见文章 [[ToC Course/10. 动效设计/Protopie中文本与赋值的本质和区别|Protopie中文本与赋值的本质和区别]]
5. 变量数据加载展示在页面
	- 动效类型==：文本(即文本替换效果)
	- ==图层选择==：早餐数
	- ==传递变量值==：==表达式==——break
	  ![202607240202754.png|378](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240202754.png)


**TIPS**：计算房间总价时，需要设置==总价文本==默认值为⭐⭐⭐==非零数==，否则乘以一个数还是0
- 可以在页面转场时，就设置自动加载，将==单价数值(room_price)==传递==总价文本==


## 优化：监听事件
>问题背景：每一次修改变量，都要手动带上【修改文本】动作；多处修改变量后，变量新值很容易漏写，界面不更新。
>![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240259167.png)

监听事件的引入：==持续盯着==某一个数据，只要它==一变==，立刻==自动执行==一套动作，不用额外绑定交互！以后任何地方修改 变量（弹窗、其他按钮、计时器），界面**自动同步更新**，不用重复添加文本动作。
参考文件：[[ToC Course/10. 动效设计/监听|监听]]

早餐数的实时监听显示
![202607240306711.png|405](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202607240306711.png)


---
- 下一页：[[ToC Course/10. 动效设计/protopie实现交换条件判断|protopie实现交换条件判断]] 




