import {createContext, useContext, useEffect, useState} from "react";

const TodoContext = createContext();


export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');



    const completedTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const leftTodoCount = todos.filter(todo => !todo.completed).length;


    const todoCategory = (todos, filter) => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
        }
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    }

    const values = {
        todos,
        setTodos,
        filter,
        setFilter,
        completedTodo,
        removeTodo,
        leftTodoCount,
        todoCategory,
        clearCompleted
    }

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context;
}

export default TodoContext