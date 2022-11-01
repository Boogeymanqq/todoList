import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { AddTodo } from "./AddTodo";

const changeHandler = jest.fn();

describe("AddTodo component", () => {
  it("Render addTodo component", () => {
    render(<AddTodo value="" onChange={changeHandler} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("ChangeHandler works", () => {
    render(<AddTodo value="" onChange={changeHandler} />);

    userEvent.type(screen.getByRole("textbox"), "Hello");

    expect(changeHandler).toHaveBeenCalledTimes(5);
  });
});
