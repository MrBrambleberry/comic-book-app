import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import * as copy from './copy/home.json'

describe('On the main page', () => {
  it("it renders static content", async () => {
    await render(<App />);
    expect(screen.getByText(copy.heading)).toBeInTheDocument();
  });
})

