import React, { Component } from 'react'

export default class TodoItem extends Component {

  handleCheckboxChange = () =>{
    // console.log(this.props.isComplete)
    this.props.onCompletedChange(this.props.id) 
  }

  render(){
    return (
      <li>
        <input 
          type="checkbox"
          checked = {this.props.isComplete}
          onChange = {this.handleCheckboxChange}
        ></input>
        <span>
          {this.props.id} {this.props.title} {this.props.isComplete? "完成":"未完成"}
        </span>
        
      </li>
    )
  
  }
 
}

