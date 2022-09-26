import React, {useState} from 'react';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import FooterInfo from "./components/FooterInfo";
import {TodoProvider} from "./contexts/TodoContext";

const App = () => {

    return <>
        <TodoProvider>
            <div className='todoapp'>
                <Header />
                <TodoList />
                <Footer />
            </div>
            <FooterInfo/>
        </TodoProvider>
    </>
}

export default App;