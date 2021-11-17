# spa-base-web （vue 脚手架基础架构）
#### 1、基于vue官方脚手架搭建 当前版本 @vue/cli 4.5.14 （需要 Node.js v10及以上）
#### 2、相关配置选项 Vue2.x、Babel、Vuex、Router、Eslint-Standard、CSS Pre-processors
#### 3、相关配置信息
- 环境变量
- ESlint检测
- proxy跨域
- Gzip压缩
- 打包压缩
- Css 样式预设
- mock数据
- sass样式、less样式提供统一的全局样式及全局变量

#### 4、src目录结构
- api  【web前端接口】
- assets
- - iconfont 【字体库】
- - images  【资源图片】
- components
- - common  【公共组件】
- config
- - index.js  【系统配置信息】
- - theme.js  【颜色主题变量配置】
- directive   【指令配置】
- layout
- - main.vue  【页面布局】
- mock        【mock数据】
- plugin      【插件配置】
- router    
- - index.js  【路由守卫、跳转等处理】    
- - routers.js【路由配置信息】 
- store       【Vuex配置信息】 
- style       【全局样式与自定义样式】 
- utils       【工具类】 
- views       【页面】 
