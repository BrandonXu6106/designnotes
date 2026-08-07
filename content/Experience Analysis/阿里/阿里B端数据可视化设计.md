---
title: 阿里B端数据可视化设计
source: https://www.uxbaike.com/post/20187/21137
author:
  - UX百科网 - 学设计上UX百科
created: 2026-07-18
description: 一、业务背景 以我们 CCO 体验设计团队为例，主要服务阿里体系的消费者、商家、经济体等业务领域。随着业务不断扩大、用户角色多、体验复杂、设计师人力有限、定制化需求不断增加，设计面临严峻挑战。 业务多：30 多个产品应用 角色多：覆盖消费者、客服小二、服务管理、业务运营、中台管理、客户 6 大类用户...
tags:
  - UI
  - b端
---
## 阿里B端数据可视化设计
## 一、业务背景
以我们 CCO 体验设计团队为例，主要服务阿里体系的消费者、商家、经济体等业务领域。随着业务不断扩大、用户角色多、体验复杂、设计师人力有限、定制化需求不断增加，设计面临严峻挑战。
1. 业务多：30 多个产品应用
2. 角色多：覆盖消费者、客服小二、服务管理、业务运营、中台管理、客户 6 大类用户群体。
3. 体验复杂：设计师需兼顾用户和客户两个视角。
![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-2.jpg)

从组织上，85% 设计师纵向支撑业务，15% 设计师横向做标准化，反哺业务设计师。标准化实质解决的问题是保障基础体验一致性。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-3.jpeg)


## 二、标准化怎么做

核心通过页面梳理、抽象、分发、衡量，保障基础体验一致性。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-4.jpeg)

  

## 三、案例实战

以数据可视化场景为例，讲述如何做标准化。

## 1\. 业务现状

共有 11 个应用，涉及 89 个页面。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-5.jpg)

  

## 2\. 问题

体验不一致：各个工作台页面架构、组件、样式野蛮生长，缺少规范导致体验不统一。  
低效：部分场景缺失，组件重复建设，大量定制；沟通协同内耗大，成本高。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-6.jpg)

  

## 3\. 策略

体验统一：框架、组件、样式。

提效：代码化、工具、交付机制。

## 4\. 体验统一

包括框架、组件、样式。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-7.jpg)

  

### ① 框架

现有页面收集

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-8.jpg)

  

用户场景分析：

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-9.jpg)

  

页面归类：

结合用户看数内容（例：概览、分析、详情）和交互形态（例：平铺、下钻），对页面进行归类。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-10.jpg)

  

通过统计高频复用形态，确定典型布局。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-11.jpg)

  

### ② 组件

页面结构分析

组件的收敛，需要先对页面分析，确定模块层内容。例：模块包含页头、筛选、图表、表格。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-12.jpg)

  

模块层分类

横向收集全部业务，将模块层分类。细分模块扩展形态，放到对应的篓子里。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-13.jpg)

  

模块专项治理

接下来，需要对每一个模块进行专项治理。比如图表模块，再拆再抽象成指标、图表、单选、多选 4 类场景。场景里再对主体和变体（也就是扩展形态）分类。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-14.jpg)

  

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-15.jpg)

  

### ③ 样式

确定优化内容

围绕视觉凌乱，要做的便是完善设计语言。设计师需要结合自身技术底层，补充缺失规范。例如布局、色板、字体、动效。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-16.jpg)

  

确定组件范围

通过统计高频复用组件，确定需要梳理的组件范围。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-17.jpg)

  

布局

图例位置：线上有 9 种，通过从业务场景按阅读顺序划分，最终收敛成 2 种。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-18.jpg)

  

组件高度：真实线上情况，只能看 2 个指标，高度规范缺失。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-19.jpg)

  

需要根据用户分辨率调研，提炼典型分辨率。比如用户是 win 系统，包含菜单栏、任务栏等默认高度，再减去本身页面页头等默认高度，得到 3 档。确定组件建议默认行高 240px。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-20.jpg)

  

轴标签旋转角度：现状有顺/逆时针两种，通过分析标签类型，结合阅读顺序、轴与标签亲密度，确定默认角度为顺时针。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-21.jpg)

  

色板

通过场景梳理，确定不同组件使用的色板类型及缺失色板。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-22.jpg)

  

补充语义色板：从业务里抽象 2 类场景，指标和柱/饼/环场景，定义颜色。例如带正面语义，用绿色，比如升、已到岗、正常。带负面语义，用红色，比如降、旷工、失败。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-23.jpg)

  

字体

结合自身业务场景问题，从场景、版权、风格、识别、极值共 5 个维度选择字体。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-24.jpg)

  

举例场景一，纵向数据场景里，将市面上数据竞品用到的字体都横向铺开尝试，做排除法。比如 din 没版权，苹方非等宽字体，普惠 102 识别性弱。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-25.jpg)

  

举例场景二，在核心数据呈现中，helvetica 品牌风格弱，普惠在 1 亿以上极值过宽。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-26.jpg)

  

最终我们根据自身业务场景特征，用普惠和普惠 102，运用在对应场景里。并同前端提炼规则。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-27.jpg)

  

动效

首先，需要确定动效价值，明确动效需要解决的问题。这里围绕舒适度、活力、层级、反馈来讲。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-28.jpg)

  

通过动效场景链路分析，确定优化范围。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-29.jpg)

  

加载动效：围绕让用户认知过程更为自然。通过组件横向梳理、抽象图形、组合样式的思路，输出方案。比如这里共梳理 17 种组件类型，抽象成 9 类，包括点、线、面、饼、环、柱、文本、图标、词云，再进行组合产出方案。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-30.gif)

  

出场动效：通过业务分析、提炼场景、优化效果。比如这里共提炼 3 类场景，有通用、监控、舆情。围绕过渡不自然、卡顿、缺少情感化表达来优化效果。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-31.gif)

  

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-32.gif)

  

浏览动效：通过提炼场景，来强化元素之间的层级与空间关系。比如单个组件、联动、下钻场景下，围绕点击感知弱、重点不突出、缺少悬停态来优化效果。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-33.gif)

  

沉淀速度参数：将优化动效场景的速度参数，同前端约定规则沉淀组件库。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-34.gif)

  

## 5\. 提效

包含代码化提效、工具提效、机制提效。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-35.jpg)

  

整体思路

从设计组内到技术产研的提效过程。

提效面向用户依次是：组件设计师、业务设计师、前端、产品。

搭建目前还在进行中，这里主要从交付-工具-代码化来分析。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-36.jpg)

  

交付内容

1. 业务设计师：sketch/figma 物料 (样式、组件、区块、模板、规则 )
2. 业务设计师：kitchen 工具（样式、组件、区块、模板）
3. 组件工程师：组件规范/组件官网
![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-37.jpg)

  

交付机制

新需求：通过评估复用性、抽象、内审、沉淀物料。

现有业务：通过页面梳理归类、抽象、内审、沉淀物料。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-38.jpg)

## 6\. 衡量

从物理到行为层，包括样式、组件、框架、组件交互 共 4 个维度。通过一致性评分衡量标准化覆盖的好坏。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-39.jpg)

## 四、总结

回归课程，在 B 类业务里，服务多个产品、多用户角色、体验复杂的场景下，在定制化+标准化团队阵型里，标准化实质解决的问题是保障 60 分基础体验一致性。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-40.jpeg)

总结：B 端体验标准化包括物料的产出、交付以及衡量标准。

产出：包括框架、组件、样式的收敛来梳理、抽象页面。

交付：面向 2 类用户群体，业务设计，需交付物料和工具。组件工程师，代码化需提供组件规范，组件线上化需助力组件官网的建设。

衡量：一致性评分包括样式、组件、框架及组件交互。

![  ](https://image.uisdc.com/wp-content/uploads/2022/12/uisdc-bd-20221220-41.jpeg)
