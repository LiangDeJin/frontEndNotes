import React, { Component } from 'react'
import withCopyright from './withCopyright'

// 装饰器写法
// @a
// @b
// 等同于a(b(Another))
@withCopyright
class Another extends Component {
  render() {
    console.log("another")
    console.log(this.props)
    return (
      <div>
        Another {this.props.name}
      </div>
    )
  }
}

// export default withCopyright(Another)
export default Another