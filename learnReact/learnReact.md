## 学习 React 

### 使用
-  [create-react-app](https://www.npmjs.com/package/create-react-app)

### npm 安装
-  [classnames](https://www.npmjs.com/package/classnames)
-  [styled-components](https://www.npmjs.com/package/styled-components)
-  [prop-types](https://www.npmjs.com/package/prop-types)

### react 
```
rcc rfc

dangerouslySetInnerHTML:dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案。
<div dangerouslySetInnerHTML ={{__html: this.state.divContent} }></div>

React Hook
https://zh-hans.reactjs.org/docs/hooks-intro.html
useState
useEffect

createContext Context (countIndex.js)
https://zh-hans.reactjs.org/docs/context.html#caveats


js 函数式编程指南
https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/

HOC Higher-Order component
高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

```
-  [生命周期](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)
-  [ajax请求](https://www.npmjs.com/package/axios)
-  [jsonplaceholder](http://jsonplaceholder.typicode.com/)




-  [react-app-rewired](https://github.com/timarney/react-app-rewired/blob/HEAD/README_zh.md)
-  [customize-cra](https://www.npmjs.com/package/customize-cra)
-  [addDecoratorsLegacy()](https://github.com/arackaf/customize-cra/blob/HEAD/api.md)
```
让cra 支持@装饰器写法
1.不管你是要配置什么，我们最好的方式是使用react-app-rewired这个包来对cra创建的项目进行轻微的配置调整
2.安装好之后，在package.json里吧scripts里的react-scripts 替换成react-app-rewired
3.在根目录下创建一个config-overrides.js
```
```js
module.exports = () =>{
  <!-- 在这里做配置 -->
  return config
}
```
```
4.当然如果想要配置更方便，可以安装 customize-cra，然后把config-overrides.js改成这样
```

```js
const {override,addDecoratorsLegacy} =require('customize-cra')
module.exports = override(
  addDecoratorsLegacy()
)
```

