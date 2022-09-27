import React from 'react';
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
    return (
        <div className="App">
          <Counter />
            <hr/>
            <Todo />
        </div>
    );
};

export default App;