import React, { useState } from "react";

function Todoform({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div>
      <form className="Todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="Enter task for today"
        />

        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Todoform;
