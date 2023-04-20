import React from 'react'

const Paragraph = (props) => {
    const {title, style} = props
  return (
    <h2 style={style}>{title}</h2>
  )
}

export default Paragraph