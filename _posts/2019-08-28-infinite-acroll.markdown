---
layout: post
title:  "无限加载+分页"
date: 2019-08-28
categories: jekyll update
tags: [优化]
---

## 分页方式
### 传统分页
![image.png]({{site.baseurl}}/assets/2019-08-28/1.png)


### 流式分页（无限加载）
#### 原理：
- [原文](https://blog.lxxyx.cn/2017/04/27/2017/web/infinite-scroll/#%E5%8E%9F%E7%90%86)

在需要无限加载的列表底部，埋下一个隐藏元素。不断滚动，隐藏元素出现在viewport里时，加载列表数据。
HTML结构：
```html
<div>
  <ul>
    <li>列表内容</li>
    <li>列表内容</li>
    <li>列表内容</li>
    <li>列表内容</li>
  </ul>
  <div class="infinite-scroll-siginal"></div>
</div>
```
#### 优点

---
- [流式分页方案探索]([https://aotu.io/notes/2017/06/27/infinite-scrolling/index.html](https://aotu.io/notes/2017/06/27/infinite-scrolling/index.html)
)
- [Infinite Scrolling vs. Pagination](https://github.com/xitu/gold-miner/blob/master/TODO/ux-infinite-scrolling-vs-pagination.md)
