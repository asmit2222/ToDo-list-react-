import React, { useEffect, useState } from "react";
import Todoform from "./Todoform";
import EditTodoForm from "./EditTodoForm";
import ToDo from "./ToDo";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);
  const [isEdited, setisEdited] = useState(true);
  // function ToDoWrapper() {
  //   const [todos, setTodos] = useState(() => {
  //     const rawTodos = localStorage.getItem("todoreact");
  //     if (!rawTodos) return [];
  //     return JSON.parse(rawTodos);
  //   });

  useEffect(() => {
    const unSubscribe = onSnapshot(collection(db, "todos"), (snap) => {
      setTodos(snap.docs.map((doc) => ({ id: doc.id, task: doc.data().todo })));
    });
    return () => unSubscribe();
  }, []);

  const toggleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    if (isEdited) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
      setisEdited(false);
    }
  };

  // const editTask = (task, id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  // localStorage.setItem("todoreact", JSON.stringify(todos));

  return (
    <>
      <div className="TodoWrapper">
        <h1>ToDo List</h1>
        <Todoform />

        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm
              task={todo}
              setisEdited={setisEdited}
              isEdited={isEdited}
            />
          ) : (
            <ToDo
              key={todo.id}
              task={todo}
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
