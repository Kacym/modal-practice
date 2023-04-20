import React from 'react'
import Modal from './Modal'
import "./ModalBack.css"

const ModalBack = ( {closeModal} ) => {
  return (
    <div className='modalBack'>
        <Modal closeModal={closeModal}/>
    </div>
  )
}

export default ModalBack