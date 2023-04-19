import React from "react";
import { render } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header", () => {
  test("renders the header with the correct title", () => {
    const { getByRole } = render(<Header />);
    const headerTitle = getByRole("heading", { level: 1 });
    expect(headerTitle).toHaveTextContent("React & Typescript Project");
  });
});
