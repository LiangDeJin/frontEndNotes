import React, { Component } from 'react'
import { CountConsumer } from '../../countStore'
// 定义一个Counter组件
export default class Counter extends Component{
  render(){
    return (
      // <span>10</span>
      // 使用 CountConsumer来接收count    
      <CountConsumer>
        {   
          // (arg)=>{
          //   console.log(arg)
          // }
          // 注意！Consumer的children必须是一个方法，这个方法有一个参数，这个参数就是Provider的value
          ({count})=>{
            return (<span>{count}</span>)
          }
        }
       
      </CountConsumer>
    )
  }
}