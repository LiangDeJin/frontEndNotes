import React, { Component,Fragment} from 'react'
import { 
  TodoHeader,
  TodoInput,
  TodoList 
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
        <TodoInput />
        <TodoList  todos = {this.state.todos} />
      </Fragment>
    //    <>
    //    <TodoHeader />
    //    <TodoInput />
    //    <TodoList />
    //  </>
    )
  }
}
