---
layout: post
title: Chrome DevTools —— Audits Result
date: 2019-09-26
categories: jekyll update
tags: [优化]
---

# Metrics

## First CPU Idle(曾经也称为 First Interactive)

The First CPU Idle metric measures when a page is minimally interactive:

- Most, but maybe not all, UI elements on the screen are interactive.
- The page responds, on average, to most user input in a reasonable amount of time.

[docs](https://developers.google.com/web/tools/lighthouse/audits/first-cpu-idle)

- [优化关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
- [优化内容效率](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency)

## Time to Interactive(TTI) —— 可交互时间

TTI：应用从开始加载到能快速响应用户操作所需的时间
[TTI docs](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive)
优化方式同 Speed Index

## Max Potential First Input Delay

FID：用户在页面进行某项操作，应用无反应的时间
[FID docs](https://developers.google.com/web/updates/2018/05/first-input-delay?utm_source=lighthouse&utm_medium=devtools)

# Opportunities

## Serve images in next-gen formates

[docs](https://developers.google.com/web/tools/lighthouse/audits/webp?utm_source=lighthouse&utm_medium=devtools)

- 将建议的图片按 WebP 编码

## Properly size images

[docs](https://developers.google.com/web/tools/lighthouse/audits/oversized-images)

- 采用响应式图片
  - [图像](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images#images_in_markup)
- 采用矢量图片，比如 SVG
- Client Hints
  - [Automating Resource Selection With Client Hints](https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints)

## Eliminate render-blocking resources

[docs](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources?utm_source=lighthouse&utm_medium=devtools)

- 非关键脚本：使用`async`或`defer`属性标记它们
  - [使用 JavaScript 添加交互](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript)
- 非关键样式表：将样式拆分成不同的文件，按媒体查询进行组织，然后先每个样式表链接添加一个`media`属性
  - [阻塞渲染的 CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- 非关键 HTML：使用`async`属性标记它们

## Remove unused CSS

[docs](https://developers.google.com/web/tools/lighthouse/audits/unused-css?utm_source=lighthouse&utm_medium=devtools)

## Efficiently encode images

[docs](https://developers.google.com/web/tools/lighthouse/audits/optimize-images?utm_source=lighthouse&utm_medium=devtools)
