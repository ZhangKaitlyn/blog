---
layout: post
title: 'jest + vue-test-utils question'
date: 2019-09-05
categories: jekyll update
tags: [单元测试]
---

# jest 只测试单个文件

```
testRegex: 'TableType.spec.js',
```

# el-table + vue-infinite-loading 的测试：

```
<div id="app">
  <el-table>
    <!-- el-table-column items -->

    <infinite-loading
      slot="append"
      @infinite="infiniteHandler"
      force-use-infinite-wrapper=".el-table__body-wrapper">
        <div slot="no-more" class="table-type-no-more">没有更多了</div>
    </infinite-loading>
  </el-table>
</div>
```

how to test no-more slot ???
