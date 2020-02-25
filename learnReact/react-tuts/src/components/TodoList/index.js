import React, { Component } from 'react'
import TodoItem  from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  
  static propTypes = {
    todos:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete:PropTypes.bool.isRequired
    })).isRequired,
    onCompletedChange:PropTypes.func
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              <TodoItem 
                onCompletedChange = {this.props.onCompletedChange}
                key = {todo.id}  
                // id = {todo.id} 
                // title = {todo.title}
                // isComplete = {todo.isComplete}
                {...todo}
              />
            )
          })
        }        
      </ul>
    )
  }
}
