# Vue-have-done

> 使用她，记录你一周的工作内容【借助HTML5 localStorage实现本地存储】

## Build Setup

``` bash
# go into app folder
cd app

# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Tech Stack
- Vue 2.0
- Vue-router
- Vue-cli
- Element
- ES6
- localStorage
- Moment.js
- Animate.CSS
- Webpack

## Notes
1. 父传子：props;  子传父：this.$(‘tellFathor’,yourdata);
2. 使用组件前，既可以全局注册又可以局部注册
3. 组件中的data必须是函数
4. 本项目使用了饿了么组件库，并且是按需引入的，当需要更改主题颜色时，去饿了么组件库官网，使用他们提供的工具生成下载新的样式文件，把这个文件放到assets目录后，将其文件夹改名为theme-custom，然后将node_modules里面的element里面的theme-default里面的5个文件夹复制到theme-custom文件夹下才可以。【这是一个坑！文档里没有说这一步骤】然后再修改.babelrc文件"styleLibraryName": "~src/assets/theme-custom"，这才完成的自定义主题的配置，好麻烦啊！！！
5. 由于使用Npm过程中，版本经常变来变去，所以，改为使用Yarn进行版本控制
6. 如果安装新模块：Yarn add [package] [--dev/-D]
7. 如果删除模块：yarn remove [package]
