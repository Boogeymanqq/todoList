import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Todo } from "./Todo";

const data = {
  id: Date.now().toString(),
  title: "todo",
  completed: false,
};

describe("Todo component", () => {
  it("Todo renders", () => {
    render(<Todo todo={data} />);

    expect(screen.getByText("todo")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("Todo snapshot", () => {
    const listItem = render(<Todo todo={data} />);

    expect(listItem).toMatchSnapshot();
  });
});
