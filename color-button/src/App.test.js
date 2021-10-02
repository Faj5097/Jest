import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to red!" });

  expect(button).toHaveStyle({ backgroundColor: "red" });
});
