import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('On the main page', () => {
  it("it renders static content", async () => {
    await render(<App />);
    expect(screen.getByText("Comic book app")).toBeInTheDocument();
    expect(screen.getByText("Iron Man")).toBeInTheDocument();
  });
})

