import React from "react";
import Todo from "./Todo";

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {TodoList.map((todo) => (
                    <Todo text={todo.text} id={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;