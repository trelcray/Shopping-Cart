import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Card } from "../components/Card";

describe("Card component", () => {
  it("Should render product information correctly", () => {
    // Arrange
    const product = {
      id: "1",
      name: "Product 1",
      price: "10",
      quantity: 1,
      photo: "https://example.com/product1.jpg",
    };

    // Act
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Card {...product} />
      </Provider>
    );

    // Assert
    expect(getByTestId("product-name")).toHaveTextContent("Product 1");
    expect(getByTestId("product-quantity")).toHaveTextContent("1");
    expect(getByTestId("product-price")).toHaveTextContent("R$10");
    expect(getByText("+")).toBeInTheDocument();
    expect(getByText("-")).toBeInTheDocument();
  });

  it("Should increment and decrement product quantity correctly", () => {
    // Arrange
    const product = {
      id: "1",
      name: "Product 1",
      price: "10",
      quantity: 1,
      photo: "https://example.com/product1.jpg",
    };

    // Act
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Card {...product} />
      </Provider>
    );

    // Assert
    fireEvent.click(getByText("+"));
    expect(getByTestId("product-quantity")).toHaveTextContent("1");

    fireEvent.click(getByText("-"));
    expect(getByTestId("product-quantity")).toHaveTextContent("1");
  });
});
