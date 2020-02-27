import React, { Component } from 'react'

const withCopyright = (YourComponent) =>{
 return  class withCopyright extends Component {
    render() {
      console.log(this.props)
      return (
        <>
          <YourComponent {...this.props}/>
          <div>&copy;withCopyright &emsp;2 &nbsp;27</div>
        </>
      )
    }
  }
} 

export default withCopyright