// Component 大写是一个类 createRef 小写是一个方法 react里面通过ref来获取组件或者dom 元素，要使用ref之前必须先调用React.createRef方法来创建一个ref
import React, { Component,createRef } from 'react'
import PropTypes from 'prop-types';

export default class TodoInput extends Component {

  static propTypes = {
    btnText:PropTypes.string.isRequired
  }

  static defaultProps ={
    btnText:"点击确认",
  }

  constructor(){
    super()
    this.state = {
      inputValue:""
    }
    //3 this.confirmClick = this.confirmClick.bind(this)
    // 在constructor里创建ref
    this.inputDom = createRef()
  }

  inputChange=(e)=>{
    // console.log(e.currentTarget.value)
    this.setState({
      inputValue : e.currentTarget.value
    })
    
  }

  // 1
  confirmClick = (e) =>{
    // console.log(e)
    // console.log(this.state)
    // console.log(this.inputDom)
    // 实际的项目中还需要对其做验证 
    if(this.state.inputValue === ""){
      return
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue:""
    },()=>{
      this.inputDom.current.focus()
    })

    // this.props.addTodo(this.state)
  }

  // 2
  // confirmClick(id,e){
  //   console.log(id,e)
  //   console.log(this.state)
  // }

  //3 confirmClick(id,e){
  //   console.log(id,e)
  //   console.log(this.state)
  // }

  //4 
  // confirmClick = (id) =>{
  //   console.log(this)
  //   console.log(id)
  //   console.log(this.state)
  // }


  handleKeyUp = (e) =>{
    // console.log(e)
    if(e.keyCode===13){
      console.log(this.state.inputValue)
      this.confirmClick()
      
    }
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <input 
          type="text"
          value = {this.state.inputValue}
          onChange = {this.inputChange}
          onKeyUp = {this.handleKeyUp}
          ref = {this.inputDom}
        />
        <button 
          onClick = {this.confirmClick}
          //2 onClick = {this.confirmClick.bind(this,123)}
          //3 onClick = {this.confirmClick(123)}
          //4 onClick = {()=>{
          //   this.confirmClick(123)
          // }}
        >
          {this.props.btnText}
        
        </button>

      </div>
    )
  }
}
