import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BannerOptions from "../BannerOptions";

describe("BannerOptions", () => {
  it("should navigate to 'printer/create' when 'Adicionar' button is clicked", () => {
    render(
      <BrowserRouter>
        <BannerOptions />
      </BrowserRouter>
    );

    const link = screen.getByTestId("create-printer");
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/printer/create");
  });
  it("should navigate to 'counter/create' when 'Adicionar' button is clicked", () => {
    render(
      <BrowserRouter>
        <BannerOptions />
      </BrowserRouter>
    );

    const link = screen.getByTestId("create-counter");
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/counter/create");
  });
});
