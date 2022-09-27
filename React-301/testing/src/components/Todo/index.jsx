import React, {useState} from 'react';

const defaultItems = [
    {
        name: 'Item A'
    },
    {
        name: 'Item B'
    },
    {
        name: 'Item C'
    }
]

const Todo = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState(defaultItems);
    return (
        <div>
            <label>
                Text
                <input onChange={(e) => setText(e.target.value)} type="text"/>
            </label>
            <button onClick={() => setItems((prev) => [...prev, {name: text}])}>Add Todo</button>

            <hr/>

            {
                items.map((item, index) => (
                    <div key={index}>
                        <button>{item.name}</button>
                        <button onClick={() => setItems((prev) => prev.filter((_, i) => i !== index))}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Todo;