import React, { Component, createContext } from 'react'

// console.log(createContext())
// createContext() 这个方法的结果是一个对象，里面有Provider和Consumer
// Provider 用于提供状态
// Consumer 用于接收状态
const {
  Provider,
  Consumer:CountConsumer //解构出来重新赋值给一个CountConsumer的组件
} = createContext()


// 封装一个基本的Provider，因为直接使用Provider，不方便管理状态
class CounterProvider extends Component{

  constructor(){
    super()
    // 这里的状态就是共享的，任何CounterProvider 的后代组件都可以通过CounterConsumer来接收这个值
    this.state ={
      count:100
    }
  }
  // 这里的方法也会继续通过Provider共享下去
  dcrementCount =()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  
  incrementCount =()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  render(){
    // console.log(this.props.children)
    return (
      // 使用Provider这个组件，它必须要有一个value值，这里的value里可以传递任何的数据。一半还是传递一个对象比较合理
      <Provider value ={
        {
          count:this.state.count,
          dcrementCount:this.dcrementCount,
          incrementCount:this.incrementCount
        }
      }>
        {/* 指的是 <App/> 后代组件*/}
        {this.props.children}

      </Provider>
    )
  }
}

export {
  CounterProvider,
  CountConsumer
}