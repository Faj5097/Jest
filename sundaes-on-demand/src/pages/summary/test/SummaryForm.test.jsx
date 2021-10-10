import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox enabes button", () => {
  render(<SummaryForm />);
  const confirmBtn = screen.getByRole("button", { name: /confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i
  });

  expect(checkbox).not.toBeChecked();
  expect(confirmBtn).toBeDisabled();

  userEvent.click(checkbox);
  expect(confirmBtn).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmBtn).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const checkbox = screen.getByText(/terms and conditions/i);
  userEvent.hover(checkbox);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(checkbox);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
