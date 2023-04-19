import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Test case for header
test("should render the header text", async () => {
  render(<Header />);
  const headingText = screen.getByRole("heading", {
    name: "React & Typescript Project",
  });

  expect(headingText).toBeInTheDocument();
});
