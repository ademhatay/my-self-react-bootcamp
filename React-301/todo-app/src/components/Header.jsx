import React, {useState} from 'react';
import {useTodo} from "../contexts/TodoContext.jsx";

const Header = () => {
    const {todos, setTodos} = useTodo();
    const [value, setValue] = useState('');

    const addTodo = (e) => {
        if (e.key === 'Enter' && value) {
            setTodos([...todos, {
                id: Date.now(),
                text: value,
                completed: false
            }], setValue(''));
        }
    }

    return <>
        <header className='header'>
            <h1>TODOS</h1>
            <input className="new-todo" placeholder="write a todo here..."
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyPress={addTodo}
            />
        </header>
    </>
};

export default Header;