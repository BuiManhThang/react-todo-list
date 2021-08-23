import React, { useState } from 'react'
import './CheckBox.css'

const CheckBox = ({idItem, checkedItem, onCheck}) => {
    const [isChecked, setIsChecked] = useState(checkedItem);
    const handleCheck = () => {
        setIsChecked(!isChecked);
        onCheck(idItem);
    }
    return (
        <div className="checkbox">
            <input className='checkbox__input' type="checkbox" name="" id={idItem} hidden checked={isChecked} onChange={handleCheck} />
            <label className='checkbox__label' htmlFor={idItem}></label>
        </div>
    )
}

export default CheckBox
