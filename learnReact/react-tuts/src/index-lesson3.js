import React, { Component } from "react";
import { render } from "react-dom";

// const Header = () => <h1 className="title">JSX 原理</h1>

// // 定义组件的第二种方式，使用类继承Raact.Component
// class App extends Component{
//   render(){
//     console.log(this.props)
//     return (
//       <div>
//         <Header />
//         <h1>{this.props.desc}</h1>
//       </div>
//     )
//   }
// }

// render(
//   <App desc='类组件是继承React.Components'/>,
//   document.querySelector('#root')
// )

// 这里是使用类的形式创建的组件， 这是jsx的语法，但不是合法的js代码
// class App extends Component{
//   render(){
//     return (
//       <div className="app" id="appRoot">
//         <h1 className="title">JSX 原理</h1>
//         <p>类组件是继承React.Componentd的</p>
//       </div>
//     )
//   }
// }


// 所以react在真正渲染的时候会把上面的代码编译为下面这个样子来运行，下面是合法的jsx 代码
class App extends Component{
  render(){
    return( 
      // React.createElement 是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的：
      // 第一个可以理解为标签名
      // 第二个可以理解为标签属性
      // 剩下的，就继续写更多的子元素
      // React.createElement(type,[props],[...children])
      React.createElement(
        'div',
        {
          className:'app',
          id:'appRoot'
        },
        React.createElement(
          'h1',
          {
            className:'title'
          },
          'JSX 原理'
        ),
        React.createElement(
          'p',
          null,
          '类组件是继承React.Componentd的'
        )
      )
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)