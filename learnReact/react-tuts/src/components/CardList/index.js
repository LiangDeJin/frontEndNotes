import React, { Component } from 'react'

export default class CardList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>苹果</td>
            <td>8888</td>            
            <td>
              <button>-</button>
              <span>10</span>
              <button>+</button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
