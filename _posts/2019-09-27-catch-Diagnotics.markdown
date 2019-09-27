---
layout: post
title: .catch() + Chrome DevTools —— Audits Result
date: 2019-09-27
categories: jekyll update
tags: [错误, 优化]
---

# .catch() vs .catch(() => {})

- .catch() 无效！！！
- .catch(() => {}) 才有效

![image]({{site.baseurl}}/assets/2019-09-27/1.png)
![image]({{site.baseurl}}/assets/2019-09-27/2.png)

# Audits Result —— Diagnotics

更多关于应用性能的信息。

![image]({{site.baseurl}}/assets/2019-09-27/3.png)

## Ensure text remains visible during webfont load

[Controlling Font Performance with font-display docs](https://developers.google.com/web/updates/2016/02/font-display?utm_source=lighthouse&utm_medium=devtools)

- font-display: auto(default) OR block OR swap OR fallback OR optional

## Serve static assets with an effcient cache policy

[docs](https://developers.google.com/web/tools/lighthouse/audits/cache-policy?utm_source=lighthouse&utm_medium=devtools)

## Minimize main-thread word

## Avoid enormous network payloads

[docs](https://developers.google.com/web/tools/lighthouse/audits/network-payloads?utm_source=lighthouse&utm_medium=devtools)

- 减少请求返回的数据大小
  - 需要时再发送请求,[PRPL 模式](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
  - 将请求数据优化到最小
    - 允许文本压缩，[Enable Text Compression](https://developers.google.com/web/tools/lighthouse/audits/text-compression#recommendations)
    - 减少 HTML、CSS 和 JS，[优化基于文本的资产的编码和传送大小](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#minification_preprocessing_context-specific_optimizations)
    - 使用 WebP 代替 JPEG 或者 PNG，[Serve Image in Next-Gen Formats](https://developers.google.com/web/tools/lighthouse/audits/webp)
    - 设置 JPEG 图片的压缩级别为 85，[Optimize Images](https://developers.google.com/web/tools/lighthouse/audits/optimize-images#recommendations)
  - 缓存请求结果
    - [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
    - [Service Works:An Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)

## Reduce JavaScript execution time

[JavaScript Bootup Time is Too High](https://developers.google.com/web/tools/lighthouse/audits/bootup?utm_source=lighthouse&utm_medium=devtools)
[JavaScript 启动优化](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/)

- 只发送用户需要的代码
- 尽可能减少代码
- 压缩代码
- 移除无用代码
- 缓存代码以最大限度减少网络往返次数

## Avoid an excessive DOM size

[docs](https://developers.google.com/web/tools/lighthouse/audits/dom-size?utm_source=lighthouse&utm_medium=devtools)
最佳的 Dom 树：

- 结点数 小于 1500
- 结点深度 小于 32
- 每个父结点的子结点数 小于 60

## Minimize Critical Requests Depth

[关键请求链](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains?utm_source=lighthouse&utm_medium=devtools)

![image]({{site.baseurl}}/assets/2019-09-27/4.png)

[Chrome 资源优先级和调度](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit)

## Keep request counts low and transfer sizes small

[docs](https://developers.google.com/web/tools/lighthouse/audits/budgets?utm_source=lighthouse&utm_medium=devtools)

![image]({{site.baseurl}}/assets/2019-09-27/5.png)
