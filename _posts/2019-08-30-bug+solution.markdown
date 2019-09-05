---
layout: post
title:  "bug及解决方案记录"
date: 2019-08-30
categories: jekyll update
---

# 网盘
## bug
![image.png](https://upload-images.jianshu.io/upload_images/1933701-6dd14254b2d8e38e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## bug原因

1. 起因：网盘文件多时，由于没有分页，每次打开，有多少个文件，就需要渲染多少dom
2. 解决方案：使用[vue-infinite-loading](https://peachscript.github.io/vue-infinite-loading/guide/use-with-el-table.html)无限加载
3. 新的bug：文件数<15个时，网盘一直处于加载状态，或者操作后卡顿
```
// 文件数=0时
fileListChunk = []
fileListChunk.length = 0
this.nowPage = 1
```

![image.png](https://upload-images.jianshu.io/upload_images/1933701-3aa364a88377b1e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)