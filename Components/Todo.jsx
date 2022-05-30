import React, { useState } from "react";

function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const createTodo = (e) => {
        e.preventDefault();

        setTodos((prevTodo) => {
            setTask("");
            return [...prevTodo, { todo: task, id: Date.now() }];
        });
    };

    const deleteItem = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter((item) => item.id !== id);
        });
    };

    return (
        <div>
            <form onSubmit={createTodo}>
                <input type="text" value={task} onChange={handleChange} />
                <button type="submit">+</button>
            </form>

            <div>
                {todos.map((item) => {
                    return (
                        <ul key={item.id}>
                            <li>{item.todo}</li>
                            <button onClick={() => deleteItem(item.id)}>-</button>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

export default Todo;