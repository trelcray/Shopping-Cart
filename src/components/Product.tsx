import { StyledProduct } from "@/styles/styled";
import { ShoppingBag } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import { IProductsProps } from "./Main";

interface Props {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
  addToCart: (data: IProductsProps) => void;
}

export function Product({
  id,
  description,
  name,
  photo,
  price,
  addToCart,
}: Props) {
  return (
    <StyledProduct>
      <Image alt="lol" width={100} height={100} src={photo} />
      <section>
        <p className="title">{name}</p>
        <span>
          <p className="price">R${price}</p>
        </span>
      </section>
      <p className="description">{description}</p>
      <Button
        onClick={() => addToCart({ id, name, description, photo, price })}
        startIcon={<ShoppingBag />}
        variant="contained">
        <p>Comprar</p>
      </Button>
    </StyledProduct>
  );
}
