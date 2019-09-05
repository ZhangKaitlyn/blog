---
layout: post
title:  "github博客 react+egg项目部署"
date: 2019-09-04
categories: jekyll update
---
# github 博客

[Jekyll 搭建静态博客](https://643435675.github.io/2015/02/15/create-my-blog-with-jekyll/)
[Setting up a Jekyll blog on Github Pages](https://michelleful.github.io/code-blog//2014/02/28/setting-up-a-jekyll-blog-on-github-pages/)


## 安装ruby
[rubyinstaller](https://rubyinstaller.org/downloads/)
![image.png](https://upload-images.jianshu.io/upload_images/1933701-3961cf07788ab2e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 安装 RubyGems
[Download RubyGems](https://rubygems.org/pages/download)

## 用 RubyGems 安装 Jeklly
```
gem update --system
gem install jeklly
```

![image.png](https://upload-images.jianshu.io/upload_images/1933701-652b934749d53491.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# react + egg 项目部署
[应用部署](https://github.com/eggjs/egg/blob/master/docs/source/zh-cn/core/deployment.md)
egg 内置了  `egg-cluster` 来启动 Master 进程，Master 有足够的稳定性，**不再需要**使用 `pm2` 等进程守护模块
```
{
  "scripts": {
    "start": "egg-scripts start --daemon",
    "stop": "egg-scripts stop"
  }
}
```
![image.png](https://upload-images.jianshu.io/upload_images/1933701-e7884e571e471ced.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
