import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm />);
  // Act
  const formHeader = screen.getByText(/checkout form/i);
  //Assert
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  // Arrange
  render(<CheckoutForm />);
  // Act
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  userEvent.type(firstNameInput, "Elizabeth");
  userEvent.type(lastNameInput, "Sanchez");
  userEvent.type(addressInput, "123 S. Nowhere Ave.");
  userEvent.type(cityInput, "Nowhere");
  userEvent.type(stateInput, "SW");
  userEvent.type(zipInput, "1234");

  // click button

  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  userEvent.click(checkoutButton);
  // Assert
  expect(firstNameInput).toHaveValue("Elizabeth");
  expect(firstNameInput).toBeInTheDocument();

  // form success message shows
  const successMessage = screen.getByTestId(/successmessage/i);
  expect(successMessage).toBeInTheDocument();
});
