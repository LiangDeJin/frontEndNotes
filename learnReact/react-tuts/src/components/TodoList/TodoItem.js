import React from 'react'

export default function TodoItem(props) {
  console.log(props)
  return (
    <li>
      {props.id} {props.title} {props.isComplete? "完成":"未完成"}
    </li>
  )
}
