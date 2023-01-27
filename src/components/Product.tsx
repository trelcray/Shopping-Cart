import { StyledProduct } from "@/styles/styled";
import { ShoppingBag } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";

interface Props {
  name: string;
  description: string;
  photo: string;
  price: string;
}

export function Product({ description, name, photo, price }: Props) {
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
      <Button startIcon={<ShoppingBag />} variant="contained">
        <p>Comprar</p>
      </Button>
    </StyledProduct>
  );
}
