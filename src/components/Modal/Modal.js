import React, { useRef } from 'react'
import './Modal.css'

const Modal = ({text, onCloseModal}) => {
    const modalRef = useRef(null);
    const handleClickOutLine = (e) => {
        if(e.target === modalRef.current) {
            onCloseModal();
        }
    }
    return (
        <div className="modal" ref={modalRef} onClick={handleClickOutLine}>
            <div className="modal__content">
                <i class="fas fa-times" onClick={() => onCloseModal()}></i>
                <h2 className="modal__text">{text}</h2>
            </div>
        </div>
    )
}

export default Modal
