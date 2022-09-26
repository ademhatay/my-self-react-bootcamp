import React from 'react';
import {useTodo} from "../contexts/TodoContext.jsx";

const Footer = () => {

    const {filter, setFilter, leftTodoCount, clearCompleted} = useTodo();
    const setFilterHandler = (e) => {
        e.preventDefault();
        setFilter(e.currentTarget.text.toLowerCase());
    }
    return <>
        <footer className="footer">
            <span className="todo-count">
                <strong>{leftTodoCount}</strong>
                <span> {leftTodoCount <= 1 ? 'item' : 'items'} </span>
                <span> left </span>
            </span>
            <ul className="filters">
                <li>
                    <a  className={filter === 'all' ? 'selected' : ''} onClick={setFilterHandler}>All</a>
                </li>
                <li>
                    <a  className={filter === 'active' ? 'selected' : ''} onClick={setFilterHandler}>Active</a>
                </li>
                <li>
                    <a className={filter === 'completed' ? 'selected' : ''} onClick={setFilterHandler}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    </>
};

export default Footer;