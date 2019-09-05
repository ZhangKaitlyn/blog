---
layout: post
title:  "async / await"
date: 2019-09-02
categories: jekyll update
---

[深入理解async / await](https://juejin.im/post/5b99cbe35188255c930dc74c#heading-10)

# async
使用`async`声明函数，和普通函数唯一的区别在于，返回的是Promise对象
![image.png](https://upload-images.jianshu.io/upload_images/1933701-063b71e3da2c87dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 怎么取到async函数返回的`Promise`对象里的值？
![image.png](https://upload-images.jianshu.io/upload_images/1933701-d8bd78441f720c14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**!!!`await`关键字只能在`async`函数里使用**

# await

# return new Promise

# Promise.all()