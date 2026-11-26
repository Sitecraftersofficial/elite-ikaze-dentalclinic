import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "@/App";
import { routeComponents } from "@/pages";

describe("Dental clinic website", () => {
  it("renders the dental clinic home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App routeComponents={routeComponents} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /specialized care/i })).toBeInTheDocument();
  });

  it("renders a not-found page for unknown paths", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App routeComponents={routeComponents} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /page not found/i })).toBeInTheDocument();
  });
});
