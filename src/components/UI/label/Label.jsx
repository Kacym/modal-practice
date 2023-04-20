import React from 'react'

const Label = (props) => {
    const {title, style} = props
  return (
    <label style={style}>{title}</label>
  )
}

export default Label