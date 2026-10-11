---
title:
  - idea_shortcut
aliases:
author:
  - Brandon
date: 2026-08-15
tags:
  - status/seed
draft: false
enableToc: true
excalidraw-open-md: true
excalidraw-plugin: parsed
---
## 快捷键

| 快捷键                             | 功能                                  |
| ------------------------------- | ----------------------------------- |
| `alt + ⏎ / ⌥ + ⏎`               | 导入包，==自动修正代码==(重中之重)                |
| `Ctrl + Y / ⌘ + del`            | 删除光标所在行                             |
| `Ctrl+D`                        | 复制光标所在行的内容，插入光标位置下面                 |
| `Ctrl+Alt+L` or  `⌘ ⌥ L`        | 格式化代码(重点)                           |
| `Ctrl+ / `  or `⌘ /`            | 单行注释(重点)                            |
| `Ctrl+Shift +/` or  `⌘ ⇧ /`     | 选中代码注释，多行注释，再按取消注释(重点)              |
| `Alt+Shift+上下箭头` or  `⌥ ⇧ 上下箭头` | 移动当前代码行                             |
| `command+n`                     | 构造器代码生成器                            |
 
## 便捷语句
10.i → 自动生成: int i = 10
main → 自动生成: ==main方法==
sout → 自动生成: ==输出语句==
i.sout  → 自动生成: 输出i变量==值==的语句
i.soutv → 自动生成: 输出"==i = ..=="格式的语句  
new Scanner (System.in).var → Scanner sc = new Scanner (System.in);
sc.nextLine().var → String .. = sc.nextLine();
次数.fori → for (int i = 0; i<次数; i++ )
arr.fori → for(int i; i<arr.length; i++)
arr.for → for (int i : arr) {}



