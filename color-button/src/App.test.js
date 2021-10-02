import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue!" });

  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorBtn);

  expect(colorBtn.textContent).toBe("Change to red!");
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});
