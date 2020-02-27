import React, { Component } from 'react'
import { CountConsumer } from '../../countStore'

export default class CountBtn extends Component{
  render(){
    return (
      // <button>{this.props.children}</button>
      <CountConsumer>
        {
          ({dcrementCount,incrementCount})=>{
            // console.log(this.props)
            const handle = this.props.type === 'decrement' ? dcrementCount : incrementCount
            return (
              <button onClick={handle}>{this.props.children}</button>
            )
          }
        }
      </CountConsumer>
    )
  }
}
