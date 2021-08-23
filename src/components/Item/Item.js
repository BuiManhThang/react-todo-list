import React from 'react'
import './Item.css'
import CheckBox from '../CheckBox/CheckBox'

const Item = ({item, onCheck, onClickTask, editedTask, onDeleteTask}) => {
    const handleClickTask = () => {
        onClickTask(item.id);
    }
    return (
        <li className={`item ${editedTask === item.id ? 'edited' : ''}`}>
            <CheckBox idItem={item.id} checkedItem={item.completed} onCheck={onCheck} ></CheckBox>
            <span className={`item__title ${item.completed ? 'completed' : ''}`} onClick={handleClickTask} >{item.text}</span>
            <i className="fas fa-trash-alt item__delete" onClick={() => onDeleteTask(item.id)}></i>
        </li>
    )
}

export default Item
