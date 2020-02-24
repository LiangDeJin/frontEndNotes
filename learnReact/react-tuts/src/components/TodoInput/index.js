import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoInput extends Component {

  static propTypes = {
    btnText:PropTypes.string.isRequired
  }

  static defaultProps ={
    btnText:"点击确认"
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <input type="text"/><button>{this.props.btnText}</button>
      </div>
    )
  }
}
