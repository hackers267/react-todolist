import React from "react";
import "./App.css";
import { Filter } from "./Filter/views/Filter";
import TodoList from "./TodoList/views/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;
