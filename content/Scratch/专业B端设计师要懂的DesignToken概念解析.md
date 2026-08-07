---
title: "专业B端设计师要懂的DesignToken概念解析"
site: "知乎专栏"
source: "https://zhuanlan.zhihu.com/p/687695532?utm_source=copilot.com"
author:
  - "酸梅干超人"
published:
created: 2026-07-22
description: "本系列更新更全的内容都整理到个人网站UX百科中了，可以查看最新内容： UX百科 DesignToken 是这两年非常高频出现的B端设计术语，主要应用于设计规范的交付和前端协作上，是 B 端设计师必须要掌握的基础知识和概念…"
imagine:
tags:
---
 
[DesignToken](https://zhida.zhihu.com/search?content_id=240951260&content_type=Article&match_order=1&q=DesignToken&zhida_source=entity) 是这两年非常高频出现的B端设计术语，主要应用于设计规范的交付和前端协作上，是 B 端设计师必须要掌握的基础知识和概念之一，今天的分享就要结合上一章来认识它的基本概念。

## DesignToken是什么

了解 DesignToken 就要先要了解 Token 是什么，它是一个开发术语，大多翻译为 —— 令牌，是程序之间进行数据验证和通信的相关编码的统称。

比如我们在一个应用中完成账号的登录，那么服务器就会返回给客户端一串字符，每次你刷新页面还是访问其它模块时服务器都会验证这个串字符来确定你的身份。类似于我们进办公楼前台拿了一个临时卡，你就可以用它穿行于楼内的不同区域，如果没有这个临时卡就只能被安检拒之门外。

![](https://picx.zhimg.com/v2-3127cd45c76fe14c6f1b004fa25a8d55_1440w.jpg)

令牌这个翻译用在开发场景中非常合适，但直接把 DesignToken 叫设计令牌的话是不太合理的，我更愿意把它称为 —— 样式标签，原因下面就解释。

在 HTML+CSS 的基础知识中我们知道，要指定一个元素的样式就要为它添加对应的 CSS 属性和值。比如一级标题要设置成品牌红，那么就要增加这段 CSS 代码，

“ h1 { color: red } ”（h1一级标题）

如果链接文本也要使用相同的颜色，就要添加相同的属性和值。

“ a { color: red }”（ a即链接文本）

这个逻辑很容易理解，大多数设计元素都包含颜色，要分别为它们添加颜色属性并设置色值。这时你就会发现，同一个颜色，往往会应用到很多不同的元素上，比如上面的品牌红色可以用在用户名、提示信息、价格、关注按钮等元素上。

刚开始设置的时候还好，但如果项目开发到一半或在后续的迭代中，品牌色从红色变成蓝色怎么办？这就需要开发手动去把这些颜色找出来，然后改成新的色值，这种处理方式想想也复杂对不对。

而 DesignToken 的作用，就是在样式和目标元素中间，再添加一层 “标签”，用于统一管理。比如上面的品牌色，我们可以赋予它一个 Token 名叫 [BrandColor](https://zhida.zhihu.com/search?content_id=240951260&content_type=Article&match_order=1&q=BrandColor&zhida_source=entity) （名字随意起的不用纠结内容和格式），后续所有用到品牌色的属性只需要添加这个名字即可，而不用填写具体的色彩数值，比如标题 h1 修改后的做法如下：

h1 { Color: var(**BrandColor**); }

通过定义一个语义化的标签让不同设计元素被引用，不仅提高代码的可读性和编写效率，同时可以让后续的批量修改变得更容易。只要修改它的色值，就可以批量修改所有关联了这个标签的元素的颜色。

![](https://pic1.zhimg.com/v2-c8b9e9b878e96cd025991856bf4fca7a_1440w.jpg)

这个逻辑对于有 UI 设计学习经验的同学来说都很好理解，那就是在 UI 设计软件中样式定义。

通过定义一个样式并命名，那么后续就可以批量调用和修改这个样式，它们就是 DesignToken 的实际应用案例之一。

![](https://pic3.zhimg.com/v2-0ae585d45319679581e776bec36dec9e_1440w.jpg)

但 DesignToken 并不只是一个简单样式名、标签，它还可以实现更复杂的操作与应用。

以主色举例，虽然规范中定义主色只有一个，但并不代表在实际应用中它的色值就是“固定”的，还可能会产生各种变体，比如一个填充主色的按钮，除了默认状态还包括悬停、点击、禁用等不同状态，它们都需要通过颜色区分，所以要设置多个主色变体来应对这些场景。

![](https://pica.zhimg.com/v2-67b821eac384686038d9f5a0e50eb030_1440w.jpg)

同理，这些多出来的颜色，也要为它们设置对应的 Token 命名。而除了主色外，其它辅助用色也有同样的使用需求，且颜色的使用场景不一定只是状态切换，所以命名往往是在色彩后加数字的方式，比如下方 [Arco](https://zhida.zhihu.com/search?content_id=240951260&content_type=Article&match_order=1&q=Arco&zhida_source=entity) 的主色和成功色命名案例（变量名）：

![](https://pic4.zhimg.com/v2-c543aa562f3364e958f6026f09d61f5f_1440w.jpg)

虽然到这里我们可以用 Token 定义整个项目的所有色彩了，但还没结束，就是同一个色彩可以应用的对象很多，比如一个辅助色既可以用在文字，也能用在按钮，还能用在日历、选择器、复选框中。

![](https://pic3.zhimg.com/v2-cf309487b68b4403f3cab1a43a30bdc8_1440w.jpg)

而多个颜色，且每个颜色应用到的对象是数十种时，开发的混乱就开始了。比如定义一个新的弹出窗口内的新标签时，边框应该用 Red1 还是 Green2 还是 Blue3 ？

前端实现设计稿的过程之一， **就是实现成百上千的设计元素属性和值的正确配对** ，设计师在可视化的设计软件中操作很简单，但前端工程师完全靠这些基础 Token 命名做定义是很困难的。

于是骚操作就出现了，那就是对 Token 进行 “套娃”。即针对色彩更具体的==应用场景进行定义==，创建更细分更有可读性的 Token 进行命名，然后关联基础的色彩 Token 为它们赋值。

比如一个登录按钮的背景色可以命名 Token 为 Login-Button-Bg，一个输入框的边框可以命名为 Form-Input-Border，它们可以使用上面定义过的 BrandColor 作为值，也就是用上同一个颜色，如下面案例：

Login-Button-Bg: var ( BrandColor-1 );

Form-Input-Border:var ( BrandColor-1 );

![](https://pica.zhimg.com/v2-6bb83ef3a7173c1463bf4dc5583235d8_1440w.jpg)

有了这样的联系，那么修改了 BrandColor 的颜色，关联它的更下级的 Token，自然也会被修改。

而在这一步很多人无法理解的就是既然前端开发是组件化的，在组件定义过程中配置好基础 Token 不就可以了， **何必要再套一层，违背不样套娃的祖训？**

恭喜你发现了华点。

对于部分的基础的项目而言，在组件化开发过程中直接使用基础 Token 完全没有问题。而在一些复杂的项目中，同一类组件会包含大量的变体，这些变体同样需要单独设置属性和值，这时候套娃的作用才能真正发挥出来。不理解这个逻辑没关系，只要知道，套娃的层数不是越多越好即可。

如果使用了 B 端的开源框架，那么色彩 Token 就会额外叠加一层。因为B端开源框架制定过丰富的色卡，而颜色上面的英文，就是它对应的 Token。这些 Token 并没有实际的意义，而项目中要定义品牌色、成功色的话，就需要用这些系统内置的 Token 进行赋值……

![](https://pic1.zhimg.com/v2-91b2443dc926051258f845b4a741ccb0_1440w.jpg)

介绍到这里，我们全都围着色彩转，如果 DesignToken 只定义颜色，那不管怎么套娃都改变不了它鸡肋的命运。

**真正让 DesignToken 发挥价值的地方，在于它还可以定义其它设计属性** 。包括尺寸、字体、透明度、圆角、投影、模糊、动效等要素，即我们在设计规范中定义的大多数样式内容。

![](https://pic4.zhimg.com/v2-164187470435cf9c2352b50e41f081c9_1440w.jpg)

通过这些 DesignToken 的定义和应用，就可以让前端在开发过程中大幅度提升效率，以及提高页面还原度和最终交付质量。

最后总结一遍，DesignToken 的应用就是以前端技术驱动的样式开发工作流，通过对样式参数添加可读性更高的命名来提升开发效率。

## DesignToken的使用方法

了解了 DesignToken 是什么，那么接下来就要了解项目中应该如何制定 DesignToken，我们先从独立设计和开发的项目说起。

**DesignToken 是设计规范的延续**，需要先完成B端设计规范，也就是在项目流程的规范定义和后续页面设计之间展开。因为 DesignToken 必然会影响设计软件内样式定义的规则，所以越早确定越好。

![](https://pic1.zhimg.com/v2-d7dcb287bada312f81b5d4096674b98a_1440w.jpg)

DesignToken 可以覆盖规范中的大多数样式，所以首先要根据规范中整理的样式做分类，比如下面这些：

**![](https://pic4.zhimg.com/v2-55ede1d7f2e1b03e7fe6508cafb223ef_1440w.jpg)

每个项目的规范内容都有差异，所以除了色彩和字体外还包含什么内容是无法固定的，下面是不同设计规范制定的 DesignToken 类目：

![](https://pic3.zhimg.com/v2-78ba097e51c704c55a463a96ee30daf6_1440w.jpg)

然后我们就要定义 DesignToken 的基本命名标准，因为 DesignToken 本身是可以套娃的，所以每一层的命名形式都要做出区分，我们把 Token 简单划分成两个层：
- 基础样式层
- 组件应用层

基础样式层就是上面提到的分类，它的命名形式可以用 "**分类 - 场景 - 状态**" 这个模式来定义，而 Token 毕竟是代码，所以**只能用英文**，不用考虑大小写，用横线来进行内容的分段。应用的案例如下：

基础颜色Token：
- 品牌默认主色：color-brand-defult
- 品牌主色悬浮：color-brand-hover
- 错误颜色禁用：color-error-disabled

文字字号 Token：
- 一级标题字号：fontsize-head-big
- 一般正文字号：fontsize-text-defult
- 醒目价格字号：fontsize-price-big

阴影等级 Token
- 较低的阴影：shadow-low
- 较高的阴影：shadow-high

这个命名的方法不是完全固定的，需要在团队内部协商，尤其是需要让相关前端开发人员检查。除了命名的格式外，还包括一些英文用词的统一。

接着需要创建出对应的表格，来记录所有 Token 的明细，表格的属性包括 Token 名、中文名、值、应用场景等，比如下面的色彩 Token 案例：

![](https://pica.zhimg.com/v2-767e66e24f3ff4b866d2fe7de42d03ba_1440w.jpg)

完成基础样式层的定义以后，就可以进行组件应用层的 Token 制定。但这一步，就不是由设计师来主导，而是让前端工程师自己定了。

基础样式层的 Token，在设计软件中就是样式的命名，对设计过程有直接的影响，但是组件应用层，则完全作用于前端开发的使用场景，对设计师而言是毫无必要的。所以项目如果还需要定这一层，就要由前端工程师自己判断使用的需要，制作一个新的 Token 列表出来。

而在组件应用层的 Token，则会使用新的命名规则，网上常见的做法就是**类别+元素+属性+等级+状态**，比如下面这个普及度最广的案例：

![](https://pic4.zhimg.com/v2-4079c8de5b477b0355018c6eb2588935_1440w.jpg)

光命名还不够，同样需要使用表格的方式进行记录，而它和基础样式中唯一不同点，就是数值是基础样式的 Token 名而不是实际属性值。比如下面案例：

![](https://pic2.zhimg.com/v2-ba073e2d79192af67a35e2ebd940b5db_1440w.jpg)

相信你们立马就能感觉出来这个命名实在是太复杂了，不是单词写的越多、越生僻效果就越好，而是没有必要的情况下有经验的前端是绝对不会使用这么复杂的命名，不仅编写起来麻烦，而且可读性也极差，只会反向降低自己的效率。

所以任何成熟项目的 DesignToken 命名，都是**尽可能精简**命名的段数和单词长度，提高利用率。只要明白这个道理即可，而不用盯着前端或自作主张做出看起来非常专业但实则臃肿鸡肋的命名文档。

具体可以参考成熟的案例，如 SEMI、TDesign 的 Toekn 命名规则：

[Tokens 设计变量 - Semi Design](https://semi.design/zh-CN/basic/tokens)

[Tencent/tdesign-common · GitHub](https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme/_light.less)

掌握以上的认识，制定项目基础规范的 DesignToken 就没有问题了。但是，上一篇分享中提到的深色模式，就是在基础规范之上制定一套额外的深色规范，同样要被考虑进去。

深色模式文章： [深色模式设计思路分享](https://link.zhihu.com/?target=http%3A//mp.weixin.qq.com/s%3F__biz%3DMzI0Njc5NzM5OQ%3D%3D%26mid%3D2247498945%26idx%3D1%26sn%3Dc448f3bec556e737a20783c0c3349e39%26chksm%3De9bb79f9deccf0ef8e7bb5c8ff9b36bf95cfbaaa8403a67e23552a4ff4985b5341481cf6deba%26scene%3D21%23wechat_redirect)

而 DesignToken 实现深色模式的切换有两种做法，一种是在 Token 命名中增加模式的前缀，比如 Arco 在深色模式添加了 Dark 的前缀用于区分。

![](https://pica.zhimg.com/v2-b652be3f60307fe4ecb94c2feef6cf8e_1440w.jpg)

还有一种做法，就是命名没有任何变化，只是创建一个新的样式表，替换里面的颜色，比如在 [Semi Design](https://zhida.zhihu.com/search?content_id=240951260&content_type=Article&match_order=1&q=Semi+Design&zhida_source=entity) 中的浅色和深色模式命名没有区别，只是 HTML 会调用 Light 或者 Dark。

![](https://pic4.zhimg.com/v2-6393bcee0982f181c82fb21e2562d4cb_1440w.jpg)

无论使用哪一种，都要记住在基础规范中定义的所有 Token，在深色模式下都要罗列出来，即使它们已经合并成相同的颜色，这样才便于维护。

不管 DesignToken 这个概念看起来多高效还是先进，都一定要充分结合实际情况展开实践，再总结相关的经验做优化。并且并不建议设计师投入太多的时间到这个部分的工作中去，因为常规项目的迭代很快，我们很难预知项目半年以后会长什么样子，所以 DesignToken 的应用要把持灵活、高效、简洁的核心价值观。

下面是 Arco 和 Semi 的 Token 命名文档案例，给大家作为参考：

![](https://pica.zhimg.com/v2-a00df9802b09b4150f8d720217326374_1440w.jpg)

![](https://pica.zhimg.com/v2-b16615b7788d9da442ebf18ee466f742_1440w.jpg)

---

**结尾**

以上就是 DesignToken 的认识和定义的全部知识点，至于如何结合设计软件实现，如果看的人多，点赞转发也多，就有空再更新。