var store = [{
        "title": "Sample Post",
        "excerpt":"Below is just about everything you’ll need to style in the theme. Check the source code to see the many embedded elements within paragraphs. Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Body text Lorem ipsum dolor sit amet, test link adipiscing elit. This is strong....","categories": ["articles"],
        "tags": ["sample-post"],
        "url": "http://localhost:4000/articles/sample-post/"
      },{
        "title": "Testing Readability with a Bunch of Text",
        "excerpt":"Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": ["articles"],
        "tags": ["sample-post","readability","test","intro"],
        "url": "http://localhost:4000/articles/readability-post/"
      },{
        "title": "A Post with Images",
        "excerpt":"Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use figure with the appropriate class. Each instance of figure is auto-numbered and displayed in the caption. Figures (for images or video) One...","categories": ["articles"],
        "tags": ["sample-post","images","test"],
        "url": "http://localhost:4000/articles/sample-post-images/"
      },{
        "title": "Post with Large Feature Image and Text",
        "excerpt":"This is a sample post with a large feature image up top and tons of text. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": ["articles"],
        "tags": ["sample-post","readability"],
        "url": "http://localhost:4000/articles/readability-feature-post/"
      },{
        "title": "A Post with a Video",
        "excerpt":" Video embeds are responsive and scale with the width of the main content block with the help of FitVids. &lt;iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/PWf4WUoMXwg\" frameborder=\"0\"&gt; &lt;/iframe&gt;And here’s a Vimeo embed for testing purposes.  ","categories": ["articles"],
        "tags": ["sample-post","video"],
        "url": "http://localhost:4000/articles/video-post/"
      },{
        "title": "Sample Link Post",
        "excerpt":"So Simple Theme now supports link posts, made famous by John Gruber. To activate just add link: http://url-you-want-linked to the post’s YAML front matter and you’re done. ","categories": ["articles"],
        "tags": ["sample-post","link-post"],
        "url": "http://localhost:4000/articles/sample-link-post/"
      },{
        "title": "Syntax Highlighting Post",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": ["articles"],
        "tags": ["sample-post","code","highlighting"],
        "url": "http://localhost:4000/articles/code-highlighting-post/"
      },{
        "title": "Override Author Byline Test Post",
        "excerpt":"For those of you who may have content written by multiple authors on your site you can now assign different authors to each post if desired. Previously the theme used a global author for the entire site and those attributes would be used in all bylines, social networking links, Twitter...","categories": ["articles"],
        "tags": ["sample-post","readability","test"],
        "url": "http://localhost:4000/articles/author-override/"
      },{
        "title": "Hello World",
        "excerpt":"You’ll find this post in your _posts directory - edit this post and re-build (or run with the -w switch) to see your changes!To add new posts, simply add a file in the _posts directory that follows the convention: YYYY-MM-DD-name-of-post.ext. Sample Heading Sample Heading 2 Jekyll also offers powerful support...","categories": ["blog"],
        "tags": [],
        "url": "http://localhost:4000/blog/hello-world/"
      },{
        "title": "MathJax Example",
        "excerpt":"MathJax is a simple way of including Tex/LaTex/MathML based mathematics in HTML webpages. To get up and running you need to include the MathJax script in the header of your github pages page, and then write some maths. For LaTex, there are two delimiters you need to know about, one...","categories": ["blog"],
        "tags": [],
        "url": "http://localhost:4000/blog/mathjax-example/"
      },{
        "title": "我想要的接口？",
        "excerpt":"      必填 or 非必填         符合需求         是否支持 过滤、分页         接口已经通过测试         为空的字段是 不传 or null or “”          接口若没实现，在文档中备注下         至少同一个接口，返回的形式是统一的   ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/The+api+i+need/"
      },{
        "title": "单元测试",
        "excerpt":"  jest: 对js进行单元测试的框架      sinon.js: js库，用于做独立测试和模拟         sinon.spy(): 用于监视函数的调用情况，比如：函数是否被调用，被调用几次，传入的参数，返回的结果等     sinon.stub(): 嵌入或者替换某些代码，使用最少的依赖方法来模拟单元测试","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/vue+test+utils/"
      },{
        "title": "无限加载+分页",
        "excerpt":"分页方式 传统分页  流式分页（无限加载） 原理：   原文在需要无限加载的列表底部，埋下一个隐藏元素。不断滚动，隐藏元素出现在viewport里时，加载列表数据。HTML结构： &lt;div&gt;  &lt;ul&gt;    &lt;li&gt;列表内容&lt;/li&gt;    &lt;li&gt;列表内容&lt;/li&gt;    &lt;li&gt;列表内容&lt;/li&gt;    &lt;li&gt;列表内容&lt;/li&gt;  &lt;/ul&gt;  &lt;div class=\"infinite-scroll-siginal\"&gt;&lt;/div&gt;&lt;/div&gt;优点   流式分页方案探索  Infinite Scrolling vs. Pagination","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/infinite-acroll/"
      },{
        "title": "需求记录+错误记录",
        "excerpt":"需求  实现 action  mutation  getter  vue  今天犯的错： momentjs   HH vs hh          HH: Hours (24 hour time)      hh: Hours (12 hour time used with a A.)        MM vs mm          MM: Month number      mm: Minutes       ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/demand+mistake/"
      },{
        "title": "bug及解决方案记录",
        "excerpt":"网盘 bug  bug原因   起因：网盘文件多时，由于没有分页，每次打开，有多少个文件，就需要渲染多少dom  解决方案：使用vue-infinite-loading无限加载  新的bug：文件数&lt;15个时，网盘一直处于加载状态，或者操作后卡顿    // 文件数=0时fileListChunk = []fileListChunk.length = 0this.nowPage = 1       ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/bug+solution/"
      },{
        "title": "async / await",
        "excerpt":"深入理解 \basync / await async 使用async声明函数，和普通函数唯一的区别在于，返回的是 Promise 对象 怎么取到 async 函数返回的Promise对象里的值？  !!!await关键字只能在async函数里使用 await return new Promise Promise.all() ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/async+await/"
      },{
        "title": "正则+接口记录",
        "excerpt":"必须包含数字、字母的校验正则表达式 正则表达式 必须且只能包含数字、字母，6-10位 ^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6, 10}$// ^: 匹配输入字符串的开始位置。以什么什么开头// $: 匹配输入字符串的结束位置。以什么什么结尾// (?!pattern):// [0-9]: 匹配0、1、2、3、4、5、6、7、8、9// [a-zA-Z]// [0-9a-zA-z]// {6, 10}机构删除成员 机构管理员   删除某个教师          POST lessonOrganizationClassMembers      input:                  classIds: []          roleId: roleId of teacher                      删除某个学生  POST lessonOrganizationClassMembers  input:          classIds: []      roleId: roleId of student        删除某个班级的某个教师          DELETE lessonOrganizationClassMembers/:id?roleId=1        删除某个班级的某个学生          DELETE lessonOrganizationClassMembers/:id?roleId=2        机构教师               删除某个班级的某个学生          DELETE lessonOrganizationClassMembers/:id?roleId=1      ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/reg+api/"
      },{
        "title": "github博客 react+egg项目部署",
        "excerpt":"github 博客 Jekyll 搭建静态博客Setting up a Jekyll blog on Github Pages 安装 ruby rubyinstaller 安装 RubyGems Download RubyGems 用 RubyGems 安装 Jeklly gem update --systemgem install jeklly react + egg 项目部署 应用部署egg 内置了 egg-cluster 来启动 Master 进程，Master 有足够的稳定性，不再需要使用 pm2 等进程守护模块 { \"scripts\": { \"start\": \"egg-scripts start --daemon\", \"stop\": \"egg-scripts stop\"...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/github+blog+react+egg+prod/"
      },{
        "title": "jest + vue-test-utils question",
        "excerpt":"jest 只测试单个文件 testRegex: 'TableType.spec.js',el-table + vue-infinite-loading 的测试： &lt;div id=\"app\"&gt;  &lt;el-table&gt;    &lt;!-- el-table-column items --&gt;    &lt;infinite-loading      slot=\"append\"      @infinite=\"infiniteHandler\"      force-use-infinite-wrapper=\".el-table__body-wrapper\"&gt;        &lt;div slot=\"no-more\" class=\"table-type-no-more\"&gt;没有更多了&lt;/div&gt;    &lt;/infinite-loading&gt;  &lt;/el-table&gt;&lt;/div&gt;how to test no-more slot ??? ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/jest-question/"
      },{
        "title": "正则表达式——中文检测",
        "excerpt":"  \\w（小写w）: 匹配包括下划线的任何单词字符。等价于 [A-Za-z0-9]  \\W（大写W）: 匹配任何非单词字符。等价于 [^A-Za-z0-9]匹配中文的正则表达式：[\\u4e00-\\u9fa5] console.log(/[\\u4e00-\\u9fa5]/.test('地方')) // true","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/reg/"
      },{
        "title": "css transition vs animation + css max-width:100% of table",
        "excerpt":"[css] difference between transition and animation transition: 使用条件：需要事件触发（例如： :hover, :focus, :checked, javascript 触发 等） 只能定开始状态和结束状态，不能定义中间状态animation 不需要事件触发 可以有多个状态 主要包括两个部分： 用 @keyframes 声明一个动画 在 animation 中调用关键帧声明的动画 [css] max-width:100% not working when div display:table demo with bug —— demo in Codepen max-width:100% not working for table layout demo with solution —— demo in...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/css/"
      },{
        "title": "scoped css",
        "excerpt":"由于没有给style加scope产生的bug keepwork issue #5268 ","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/css-scoped/"
      }]
