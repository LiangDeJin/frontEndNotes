import React, { Fragment } from 'react' 
import PropTypes from 'prop-types';

export default function TodoHeader(props) {
  console.log(props)
  return (
    <Fragment>
      <h1>{props.desc}</h1>
      <h3>{props.children}</h3>
    </Fragment>
  )
}

TodoHeader.propTypes = {
  desc:PropTypes.string.isRequired
}

TodoHeader.defaultProps = {
  desc:"今日事，今日毕",
  children:"待办事项列表"
}