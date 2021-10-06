import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue!"
  });

  expect(colorBtn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveTextContent("Change to Medium Violet Red!");
  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

test("Button and checkbox init", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue!"
  });
  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Disable and enable Color Btn via Checkbox", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue!"
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("Spaces before camel-case capital letters", () => {
  test("Works for no inner-capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner-capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner-capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
