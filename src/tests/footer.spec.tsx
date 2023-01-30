import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("Footer component", () => {
  it("should renders correctly", () => {
    render(<Footer />);

    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados.")
    ).toBeInTheDocument();
  });
});
