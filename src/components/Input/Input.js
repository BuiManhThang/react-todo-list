import React, { useState, useEffect } from "react"
import Modal from "../Modal/Modal";
import "./Input.css"

const Input = ({onAddTask, inputRef, inputText, formRef}) => {
    const [text, setText] = useState(inputText);
    const [isFocus, setIsFocus] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setText(inputText)
    }, [inputText])

    const capital = (text) => {
        const regex = /\w/i;
        const resultMatch = text.match(regex);
        const firstCharacter = resultMatch[0].toUpperCase();
        const restText = text.slice(resultMatch.index + 1);
        return firstCharacter + restText;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /\w/i;
        if(!regex.test(text)) {
            setOpenModal(true);
            return;
        }
        onAddTask(capital(text));
        setText('');
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }
    
    return (
        <div ref={formRef} className={`input ${text !== '' || isFocus ? 'focus' : ''}`}>
            <span className="input__icon" onClick={() => {inputRef.current.focus()}}>
                {text === '' && !isFocus ? <i className="fas fa-plus"></i> : <i className="circle"></i>} 
            </span>
            <form className="input__form" onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} className="input__text" autoComplete="false" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit" className="input__submit"><i className="fas fa-play input__enter"></i></button>
            </form>
            {openModal && <Modal text="Please Type something!" onCloseModal={handleCloseModal} ></Modal>}
        </div>
    )
}

export default Input
