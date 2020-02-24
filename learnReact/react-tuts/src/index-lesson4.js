import React, { Component } from "react";
import { render } from "react-dom";
import classNames  from 'classnames';
import styled from 'styled-components';
import './index.css'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

console.log(styled)

class App extends Component{
  render(){
    const style = { color : '#F00'}
    return ( 
      <div>
        {/* 第一个{} 指的是要在里面写js 第二个{}指的是一个对象 */}
        <h1 style={{color:'#338'}}>元素中的样式</h1>
        <Title>元素中的样式</Title>
        <ol>
          <li style = {style}>使用style内联方式创建</li>
          <li className ="has-text-red">使用class 方式创建 但是在reactclass用classname</li>
          <li className ={classNames('a', { 'b': false, 'c': true })}>动态添加不同的classNames 就可以使用第三方的包叫classNames class 只有a c 没有b</li>
          <li className ={Title}>使用styled-components</li>
        </ol>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)