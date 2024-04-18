import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

test("TodoForm component renders correctly", () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText } = render(<TodoForm addTodo={addTodoMock} />);
  const inputElement = getByPlaceholderText("What needs to be done ?");
  expect(inputElement).toBeInTheDocument();
});

test("Submitting TodoForm with empty input does not call addTodo function", () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <TodoForm addTodo={addTodoMock} />
  );
  const inputElement = getByPlaceholderText("What needs to be done ?");
  const formElement = inputElement.parentElement as HTMLFormElement;

  fireEvent.change(inputElement, { target: { value: "" } });
  fireEvent.submit(formElement);

  expect(addTodoMock).not.toHaveBeenCalled();
});

test("Submitting TodoForm with input calls addTodo function with correct value", () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <TodoForm addTodo={addTodoMock} />
  );
  const inputElement = getByPlaceholderText("What needs to be done ?");
  const formElement = inputElement.parentElement as HTMLFormElement;

  const inputValue = "Test Todo";
  fireEvent.change(inputElement, { target: { value: inputValue } });
  fireEvent.submit(formElement);

  expect(addTodoMock).toHaveBeenCalledWith(inputValue);
});
