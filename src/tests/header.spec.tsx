import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Header } from "../components/Header";

describe("Header component", () => {
  it("Should renders correctly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
});
