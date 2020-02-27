import React, { PureComponent } from 'react'
const noop = () =>{}
export default class TodoItem extends PureComponent {

  // 老版本：constructor里面通过props来初始化一个state。在props修改之后，这个state不会再次更新 执行一次
  // constructor(props){
  //   super()
  //   this.state = {
  //     completeText:props.completed? '完成' : '未完成'
  //   }
  // }

  // 需要借助componentWillReceiveProps来做一次修正
  // UNSAFE_componentWillUpdate(nextProps){
  //   this.setState({
  //     completeText:nextProps.completed ? '完成' : '未完成'
  //   })
  // }


  constructor(){
    super()
    this.state = {
      completeText:''
    }
  }

  static getDerivedStateFromProps(props){
    // console.log(props)
    return {
      completeText: props.completed? '完成' : '未完成'
    }
  }



  handleCheckboxChange = () =>{
    // console.log(this.props.completed)
    // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id) 
    const {
      // onCompletedChange = () =>{},
      onCompletedChange = noop,
      id
    } = this.props
    onCompletedChange(id) 
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log(nextProps)
  //   // console.log(nextState)
  //   return nextProps.completed !== this.props.completed
  // }

  render(){
    const {
      id,
      completed,
      title
    } = this.props

    console.log(`TodoItem ${title} render`)
    return (
      <li>
        <input 
          type="checkbox"
          checked = {completed}
          onChange = {this.handleCheckboxChange}
        ></input>
        <span>
          {id} {title} 
          {/* {completed? "完成":"未完成"} */}
          {this.state.completeText}
        </span>
        
      </li>
    )
  
  }
 
}

