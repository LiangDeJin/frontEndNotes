import React, { Component } from 'react'

export default class Like extends Component {
  constructor(){
    super()
    this.state ={
      liked:false
    }
  }

  handleLikedClick =() =>{
  // 使用这种方法修改数据在react是不允许的，能修改数据，但是界面不会重新渲染
  // this.state.liked = !this.state.liked
  // 要修改数据，就要用setState方法。setState方法可以有两个参数
  // 第一个参数又有两种情况，第一种情况是一个对象
  // this.setState({
  //   liked:!this.state.liked
  // })
  // 第二种情况是一个方法
   this.setState((preState,props)=>{
    console.log("内部的 ：当前状态的liked",this.state.liked)
    // console.log(preState,props)
    return {
      liked : !preState.liked   
    }
   },()=>{
    //由于setState是异步的，如果想要获取最新的state，应该在这个回调函数里获取
     console.log("参数二 ：当前状态的liked",this.state.liked)
   })
   console.log("外边的：当前状态的liked",this.state.liked)
  }
  

  render() {
    return (
      <div onClick = {this.handleLikedClick}>
        {
          this.state.liked ? "取消 🧡" : "喜欢 🖤"
        }
      </div>
    )
  }
}
