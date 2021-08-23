import React, { useState } from 'react'
import './List.css'
import Item from '../Item/Item'

const List = ({data, onCheck, onClickTask, editedTask, onDeleteTask}) => {
    const incompletedTasks = data.filter(task => {
        return task.completed === false;
    })
    const completedTasks = data.filter(task => {
        return task.completed === true;
    })

    const [isExpandCompletedList, setExpandCompletedList] = useState(true);

    return (
        <div className="list__container">
            <ul className="list">
                {incompletedTasks.map((item) => {
                    return <Item key={item.id} item={item} onCheck={onCheck} onClickTask={onClickTask} onDeleteTask={onDeleteTask} editedTask={editedTask} ></Item>
                })}
            </ul>
            {completedTasks.length > 0 && <button className="list__completed-btn" onClick={() => setExpandCompletedList(!isExpandCompletedList)}>
                                                <i className={`fas fa-chevron-down ${isExpandCompletedList ? '' : 'unexpand'}`}></i>
                                                <span>Completed {completedTasks.length}</span>
                                            </button>
            }
            <ul className="list" style={{
                height: `${isExpandCompletedList ? (50 * completedTasks.length) + 'px' : 0 + 'px'}`
            }}>
                {completedTasks.map((item) => {
                    return <Item key={item.id} item={item} onCheck={onCheck} onClickTask={onClickTask} onDeleteTask={onDeleteTask} editedTask={editedTask} ></Item>
                })}
            </ul>
        </div>
    )
}

export default List
