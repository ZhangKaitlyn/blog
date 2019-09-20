---
layout: post
title: Chrome DevTools —— Audits
date: 2019-09-20
categories: jekyll update
tags: [优化]
---

# Chrome DevTools

- [Optimize Website Speed](https://developers.google.com/web/tools/chrome-devtools/speed/get-started)

## 加载优化流程：

### 1. 审查站点

#### 作用:

- 和修改后的效果进行比较
- 提供可优化的点

![image.png]({{site.baseurl}}/assets/2019-09-20/1.png)

![image.png]({{site.baseurl}}/assets/2019-09-20/2.png)

#### 分析审查结果

[Audit Performance References](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains)

![image.png]({{site.baseurl}}/assets/2019-09-20/3.png)

##### Metrics

![image.png]({{site.baseurl}}/assets/2019-09-20/4.png)

###### FCP(First Contentful Paint)

###### First Meaningful Paint

###### Speed Index

###### First CPU Idle

###### Time to Interactive

###### Max Potential First Input Delay

##### Opportunities

如何优化该网页加载性能的建议

![image.png]({{site.baseurl}}/assets/2019-09-20/5.png)

###### Serve images in next-gen formates

###### Properly size images

###### Eliminate render-blocking resources

###### Remove unused CSS

###### Efficiently encode images

##### Diagnotics

其余影响页面加载时间的因素

![image.png]({{site.baseurl}}/assets/2019-09-20/6.png)

###### Ensure text remains visible during webfont load

###### Serve static assets with an effcient cache policy

###### Minimize main-thread word

###### Avoid enormous network payloads

###### Reduce JavaScript execution time

###### Avoid an excessive DOM size

###### Minimize Critical Requests Depth

###### Keep request counts low and transfer sizes small

##### Passed audits

该网页通过审查的项

![image.png]({{site.baseurl}}/assets/2019-09-20/7.png)
