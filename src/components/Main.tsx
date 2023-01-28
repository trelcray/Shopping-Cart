import { addProduct } from "@/redux/data.slice";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "./Product";
import { Skeleton } from "./Skeleton";
import { Toast } from "./Toast";

export interface IProductsProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
}

export function Main() {
  const [products, setProducts] = useState<IProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  async function getProducts() {
    try {
      setIsLoading(true);
      const response = await api.get("/", {
        params: {
          page: 1,
          rows: 8,
          sortBy: "name",
          orderBy: "ASC",
        },
      });
      const object = await response.data;
      const data = object.products;
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const addToCart = (data: IProductsProps) => {
    const { id, description, name, photo, price } = data;
    const quantity = 1;
    dispatch(addProduct({ id, description, name, photo, price, quantity }));
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex">
      {isLoading
        ? Array.from({ length: 8 }, (_, i) => <Skeleton key={i} />)
        : products?.map((data) => {
            return (
              <Product
                key={data.id}
                id={data.id}
                description={data.description}
                name={data.name}
                photo={data.photo}
                price={data.price.replace(/\.00$/, "")}
                addToCart={addToCart}
              />
            );
          })}
      <Toast isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
