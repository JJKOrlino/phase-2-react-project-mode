import React, { useState } from "react";
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Flatiron's Todo List </h1>
      {/* rendering these being imported. setInputText is prop */}
      <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
