import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function EditTodoForm({ task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  const editTodo = async (value, id) => {
    const todoRef = doc(db, "todos", id);

    await updateDoc(todoRef, {
      todo: value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="Update Task"
        />

        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </>
  );
}

export default EditTodoForm;
