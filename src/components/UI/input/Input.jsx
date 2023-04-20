import React from 'react'

const Input = (props) => {
    const {change, inputType} = props 
  return (
    <input type={inputType} onChange={change} />
  )
}

export default Input