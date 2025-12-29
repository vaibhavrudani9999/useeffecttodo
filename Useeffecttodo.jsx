import React, { useState } from "react";

;
export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = text;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }
    setText("");
  }

  
  function deleteTodo(i) {
    setTodos(todos.filter((_, index) => index !== i));
  }

 
  function editTodo(i) {
    setText(todos[i]);
    setEditIndex(i);
  }

  return (
    <div className="wrapper">
      <div className="todo-card">
        <h1> Todo Manager</h1>

        {}
        <form onSubmit={handleSubmit} className="gradient-form">
          <div className="gf-input-wrap">
            <span className="gf-icon"></span>

            <input
              className="gf-input"
              type="text"
              placeholder="Add a task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className={`gf-button ${editIndex !== null ? "editing" : ""}`}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </form>

        {}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>

              <div className="actions">
                <button className="edit" onClick={() => editTodo(index)}>
                  Edit
                </button>

                <button className="delete" onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}