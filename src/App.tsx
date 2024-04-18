import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./components/types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="header">Todos</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list-container">
        {" "}
        {}
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      </div>
      <div className="buttons-container">
        <span className="remaining-count">
          {remainingCount} {remainingCount === 1 ? "item" : "items"} left
        </span>
        <button className="filter-button" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="filter-button" onClick={() => setFilter("active")}>
          Active
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button className="clear-button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default App;
