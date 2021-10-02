import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue!" });

  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorBtn);

  expect(colorBtn.textContent).toBe("Change to red!");
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
});

test("Button and checkbox init", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue!" });
  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Disable and enable Color Btn via Checkbox", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue!" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});
