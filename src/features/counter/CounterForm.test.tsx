import { render } from "@testing-library/react";
import CounterForm from "./CounterForm";

describe("Render CounterForm components", () => {
  it("Should render CounterForm component", () => {
    expect(render(<CounterForm />));
  });
});
