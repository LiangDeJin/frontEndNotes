import React, { Component } from "react";
import { render } from "react-dom";

// 定义组件的第二种方式，使用类继承Raact.Component
class App extends Component{
  render(){
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.desc}</h1>
      </div>
    )
  }
}

// 类组件渲染的原理
// const app = new App({
//   desc:'类组件是继承React.Components'
// }).render()

// render 是react dom 提供的一个方法，这个方法通常只会使用一次
render(
  <App desc='类组件是继承React.Components'/>,
  document.querySelector('#root')
)


// react 16 以前 是使用这方式创建一个类组件
// React.createClass({
//   render(){
//     return <h1>XXXX</h1>
//   }
// })

