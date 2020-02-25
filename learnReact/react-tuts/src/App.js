import React, { Component,Fragment} from 'react'
 
import { 
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

// rcc rfc
// 匿名函数
// export default () => {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

export default class App extends Component {

  // state = {
  //   btnText:"abc"
  // }


  constructor(){
    super()
    this.state ={
      title:"待办事项",
      desc:"今日事，今日毕",
      divContent:'<div>abc<i>dfg</i></div>',
      todos:[{
        id:0,
        title:"吃饭",
        isComplete:true
      },{
        id:1,
        title:"睡觉",
        isComplete:false
      }]
    }
  }

  addTodo = (todoTitle) => {
    console.log(todoTitle)
    console.log(this.state.todos)
    // const newtodos = this.state.todos.slice()
    // const newtodos = [...this.state.todos]
    // newtodos.push({
    //   id: Math.random(),
    //   title:todoTitle,
    //   isComplete:true
    // })
    // this.setState({
    //   todos:newtodos
    // })

    this.setState({
      todos:this.state.todos.concat({
        id: Math.random(),
        title:todoTitle,
        isComplete:true
      })
    })

    // var b=[1,2].push("a"); //b 接收的是push方法的返回值 即数组新的长度3
    // 因为push改变的是数组自身，因此返回数组无意义，不考虑链式需求的话.而返回长度更有实际意义，length的改变可以确认成功并且知道push加了几个。
    // var b=[1,2];
    // b.push("a"); //数组 b 使用 push() 方法 向数组内插入新值
    // var b=[1,2], c;
    // c = b.push("a"); //数组 b 使用 push() 方法 向数组内插入新值. c 接收的是push方法的返回值 即数组新的长度3
    // this.setState({
    //   todos:this.state.todos.push({
    //     id: Math.random(),
    //     title:todoTitle,
    //     isComplete:true
    //   })
    // })
   
  }

  onCompletedChange = (id) =>{
    console.log(id)
    this.setState((preState)=>{
      return {
        todos:preState.todos.map(todo =>{
          if(todo.id === id){
            todo.isComplete = !todo.isComplete
          }
          return todo
        })
      }
    })
  }

  render() {
    return (
      <Fragment>

        {/* <div dangerouslySetInnerHTML ={{__html: this.state.divContent} }></div> */}
        

        {/* {
          this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
          })
        } */}
        {/* {this.state.todos[0].isComplete ? "完成" : "未完成" } */}

        <TodoHeader desc={this.state.desc} x = {1} y = {2} >
          {this.state.title}
        </TodoHeader>
        <TodoInput 
          addTodo ={this.addTodo}
         />
        <TodoList  
          todos = {this.state.todos} 
          onCompletedChange = {this.onCompletedChange}
        />
        <Like />
      </Fragment>

    //    <>
    //    <TodoHeader />
    //    <TodoInput />
    //    <TodoList />
    //  </>
    )
  }
}
