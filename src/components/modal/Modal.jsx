import React, { useState } from 'react'
import Button from '../UI/button/Button'
import "./Modal.css"
import Input from '../UI/input/Input'
import Label from '../UI/label/Label'
import Paragraph from '../UI/paragraph/Paragraph'

const Modal = ( {closeModal} ) => {
    const [inputText, setInputText] = useState("");

    function inputTextValue(e) {
        setInputText(e.target.value);
    }
  return (
    <div className='modal'>
      <br />
        {
          inputText ? <Label title="new text:" style={{color: "red"}}/>: <Label title="start typing to add text..."/>
        }
        <Paragraph style={{color: "green"}} title={inputText}/>
        {
          inputText.length <= 7 ? <Label style={{color : "red"}} title="not enough"/> : <Label style={{color : "green"}} title="enough"/> 
        }
        <br />

        <Input inputType="text" change={inputTextValue}/>
         <br />
         <br />
        <Button onClick={closeModal} title={"Close modal"}/>
    </div>
  )
}

export default Modal