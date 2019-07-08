# vuecli2-vw

> vue-cli2引用vw移动端适配方案

## 项目构建
### 参考文献
- 如何在Vue项目中使用vw实现移动端适配(https://www.jianshu.com/p/1f1b23f8348f)

## 插件安装
- postcss-aspect-ratio-mini：主要用来处理元素容器宽高比。

- postcss-px-to-viewport：主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一。

- postcss-write-svg：主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理。

- postcss-cssnext：其实就是cssnext，该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理

- cssnano：主要用来压缩和清理CSS代码。在Webpack中，cssnano和css-loader捆绑在一起，所以不需要自己加载它。不过你也可以使用postcss-loader显式的使用cssnano。

- cssnano-preset-advanced：在cssnano的配置中，使用了preset: "advanced"，需要安装该插件

- postcss-viewport-units：主要是给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
