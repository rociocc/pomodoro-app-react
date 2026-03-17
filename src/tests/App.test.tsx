import { render, screen } from "@testing-library/react";
import { describe, expect, it } from 'vitest'
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />    
      </MemoryRouter>
    );
    expect(screen.getByText(/Pomodoro/i)).toBeInTheDocument();
  });

  // it("renders all major sections", () => {
  //   render(<App />);
    
  //   // Hero section
  //   expect(screen.getByText(/Sample Project/i)).toBeInTheDocument();
    
  //   // Features section
  //   expect(screen.getByText(/Why This Sample\?/i)).toBeInTheDocument();
    
  //   // Quick Start section
  //   expect(screen.getByText(/Quick Start/i)).toBeInTheDocument();
    
  //   // Footer section
  //   expect(screen.getByText(/Created by/i)).toBeInTheDocument();
  // });

  // it("renders the main container with correct classes", () => {
  //   const { container } = render(<App />);
  //   const mainDiv = container.querySelector(".min-h-screen");
  //   expect(mainDiv).toBeInTheDocument();
  // });
});
