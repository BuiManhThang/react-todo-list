import React, { useEffect, useState } from 'react'
import './style.css';

const Header = () => {
    const [date, setDate] = useState((new Date()).toLocaleString());
    useEffect(() => {
        setTimeout(() => {
            setDate((new Date()).toLocaleString());
        }, 1000)
    }, [date])
    return (
        <header className="header"> 
            <h1 className="header__text">
                <span className="header__title">Tasks</span>
                <span className="header__date">{date}</span>
            </h1>
        </header>
    )
}

export default Header
