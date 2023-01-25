import { StyledProduct } from "@/styles/styled";
import { ShoppingBag } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";

interface Props {}

export function Product({}: Props) {
  return (
    <StyledProduct>
      <Image
        alt="lol"
        width={100}
        height={100}
        src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
      />
      <section>
        <p className="title">Iphone 11 128 GB</p>{" "}
        <p className="price">R$5000.00</p>
      </section>
      <p className="description">
        Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o
        novo sistema de câmera dupla.
      </p>
      <Button startIcon={<ShoppingBag />} variant="contained">
        <p>Comprar</p>
      </Button>
    </StyledProduct>
  );
}
