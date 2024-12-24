import React, { useState } from "react";
import Todoform from "./Todoform";
import EditTodoForm from "./EditTodoForm";
import ToDo from "./ToDo";

function ToDoWrapper() {
  const [todos, setTodos] = useState(() => {
    const rawTodos = localStorage.getItem("todoreact");
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: new Date(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const deleteTodo = (id) => {
    const cnf = confirm("are you sure want to delete");

    if (cnf) setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  localStorage.setItem("todoreact", JSON.stringify(todos));

  return (
    <>
      <div className="TodoWrapper">
        <h1>ToDo List</h1>
        <Todoform addTodo={addTodo} />

        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <ToDo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleCompleteTodo}
            />
          )
        )}
      </div>
    </>
  );
}

export default ToDoWrapper;
