import React from 'react';
import Todo from "./Todo";
import {useTodo} from "../contexts/TodoContext.jsx";

const TodoList = () => {
    const {todos, filter, todoCategory} = useTodo();

    const filterTodos = todoCategory(todos, filter);

    return <>
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {
                    filterTodos.map((todo, index) => {
                        return <Todo index={index} key={todo.id} todo={todo} />
                    })
                }
            </ul>
        </section>
    </>
};

export default TodoList;