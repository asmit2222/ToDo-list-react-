import React from "react";

function ToDo({ task, deleteTodo, toggleComplete, editTodo }) {
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
