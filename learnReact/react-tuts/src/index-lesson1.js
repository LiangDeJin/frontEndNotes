import React from 'react'
import ReactDOM from 'react-dom'

// 这种方式可以理解为创建一个简单的react 元素
// const app = <h1>Welcome React!!!</h1>

// const createApp = (props) => {
//   return (
//     <div>
//       {/* jsx 插入js 代码/注释 都需要加一层{} */}
//       <h1>Welcome {props.title}</h1>
//       <p>优秀的{props.title}</p>
//     </div>    
//   )
// }

// const app = createApp({
//   title:'React'
// })

// 创建组件的第一种方式：使用箭头函数，但是名字要大写开始
const App = (props) => {
  return (
    <div>
      {/* jsx 插入js 代码/注释 都需要加一层{} */}
      <h1 title={props.title}>Welcome {props.title}</h1>
      <p>优秀的{props.title}</p>
    </div>    
  )
}

ReactDOM.render(
  <App title={1902}/>,
  document.querySelector('#root')
)