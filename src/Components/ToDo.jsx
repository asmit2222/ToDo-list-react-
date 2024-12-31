import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

function ToDo({ task, toggleComplete, editTodo }) {
  const deleteTodo = async (id) => {
    const cnf = confirm("are you sure want to delete");

    if (cnf) {
      // setTodos(todos.filter((todo) => todo.id !== id));
      await deleteDoc(doc(db, "todos", id));
    }
  };

  return (
    <>
      <div className="Todo">
        <p
          className={`${task.completed ? "completed" : "incompleted"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div>
          <button className="edit-btn" onClick={() => editTodo(task.id)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDo;
