import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Product } from "./Product";

interface IProductsProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
}

export function Main() {
  const [products, setProducts] = useState<IProductsProps[]>([]);

  async function getProducts() {
    try {
      const response = await api.get("/", {
        params: {
          page: 1,
          rows: 8,
          sortBy: "name",
          orderBy: "ASC",
        },
      });
      const object = await response.data;
      const data = object.products
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex">
      {products?.map((data) => {
        return (
          <Product
            key={data.id}
            description={data.description}
            name={data.name}
            photo={data.photo}
            price={data.price.replace(/\.00$/, "")}
          />
        );
      })}
    </div>
  );
}
