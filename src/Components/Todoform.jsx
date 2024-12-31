import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

function Todoform() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  const addTodo = async (value) => {
    // setTodos([
    //   ...todos,
    //   { id: new Date(), task: todo, completed: false, isEditing: false },
    // ]);
    await addDoc(collection(db, "todos"), { todo: value });
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
