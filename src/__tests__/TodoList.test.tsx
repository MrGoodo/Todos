import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

const sampleTodos = [
  { id: "1", text: "Todo 1", completed: false },
  { id: "2", text: "Todo 2", completed: true },
];

test("TodoList component renders correctly", () => {
  const toggleTodoMock = jest.fn();
  const { getByText } = render(
    <TodoList todos={sampleTodos} toggleTodo={toggleTodoMock} />
  );
  expect(getByText("Todo 1")).toBeInTheDocument();
  expect(getByText("Todo 2")).toBeInTheDocument();
});

test("Clicking on todo item toggles its completion status", () => {
  const toggleTodoMock = jest.fn();
  const { getByText } = render(
    <TodoList todos={sampleTodos} toggleTodo={toggleTodoMock} />
  );
  const todo1 = getByText("Todo 1");
  fireEvent.click(todo1);
  expect(toggleTodoMock).toHaveBeenCalledWith("1");
});
