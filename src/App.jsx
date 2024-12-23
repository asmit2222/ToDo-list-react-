import { useState } from "react";

import "./App.css";
import ToDoWrapper from "./Components/ToDoWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDoWrapper />
    </>
  );
}

export default App;
