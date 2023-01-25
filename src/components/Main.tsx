import { Product } from "./Product";

interface Props {}

export function Main({}: Props) {
  return (
    <div className="flex">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
