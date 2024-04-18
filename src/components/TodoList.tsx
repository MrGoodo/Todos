import React from "react";
import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul style={{ padding: '0' }}>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ display: 'flex', alignItems: 'baseline' }}>
          <input type="checkbox" checked={todo.completed} readOnly style={{ marginRight: '5px' }} />
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#a7a3a3fd" : "inherit",
              flex: '1'
            }}
          >
            {todo.text}
          </li>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
