import React from 'react';
import {useTodo} from "../contexts/TodoContext.jsx";

const Todo = (props) => {

    const {todo} = props;
    const {completedTodo, removeTodo} = useTodo();

    return <>
        <li className={`${todo.completed ? 'completed' : ''}`} >
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => completedTodo(todo.id)}/>
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => removeTodo(todo.id)}/>
            </div>
        </li>
    </>
};

export default Todo;