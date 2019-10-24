---
layout: post
title: ECharts + 批量判断出生日期demo
date: 2019-10-24
categories: jekyll update
tags: [Echarts, Demo]
---

# ECharts

## 禁用图例点击效果

![image.png]({{site.baseurl}}/assets/2019-10-24/1.png)
<br/>
[legend.selectedMode](https://www.echartsjs.com/zh/option.html#legend.selectedMode)

```
legend:{
  selectedMode: false
}
```

## 环形中间显示文字

![image.png]({{site.baseurl}}/assets/2019-10-24/2.png)
<br/>
[echarts-options-属性](https://v-charts.js.org/#/props?id=echarts-options-属性)

> [v-charts]如果某属性加上去之后没有生效，很可能是没有引入相应的模块，模块的位置可以参考此文件

# 幼儿园学生出生年月是否符合 Demo

[Demo - CodePen](https://codepen.io/ZhangKaitlyn/pen/MWWmYzK)
<br/>
需求：

- 从 Excel 文件导入学生信息，从中批量获取学生的身份证信息
  - [js-xlsx](https://github.com/SheetJS/js-xlsx)
- 从身份证信息中提取出生年月日
  - [substring()](https://www.w3school.com.cn/js/jsref_substring.asp)
- 判断出生年月日是否在所定区间内
  - [momentjs-isBetween()](https://momentjs.com/docs/#/query/is-between/)
