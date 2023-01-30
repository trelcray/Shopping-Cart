import { Drawer as MuiDrawer } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import { StyledDrawer } from "../styles/styled";
import { Close, ShoppingCart } from "@mui/icons-material";
import { Card } from "./Card";
import { useState } from "react";
import { useAppSelector } from "../hooks/useAppSelector";

export function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const { products } = useAppSelector((state) => state.data);
  const total = products.reduce(
    (acc, cur) => acc + parseFloat(cur.price) * cur.quantity,
    0
  );

  const quantity = products.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="contained"
        color="info"
        startIcon={<ShoppingCart color="secondary" />}>
        <Typography color="secondary">{quantity}</Typography>
      </Button>
      <MuiDrawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <StyledDrawer>
          <div>
            <div className="header">
              <p>Carrinho de compras</p>
              <IconButton
                color="info"
                aria-label="close"
                onClick={() => setIsOpen(false)}>
                <Close />
              </IconButton>
            </div>
            <div className="scroll-y">
              {products.map((data) => {
                const total = parseFloat(data.price) * data.quantity;
                const price = total.toString();
                return (
                  <Card
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    price={price}
                    quantity={data.quantity}
                    photo={data.photo}
                  />
                );
              })}
            </div>
          </div>
          <div className="container">
            <div className="price">
              <p>total:</p>
              <p>R${total}</p>
            </div>
            <Button className="confirm" variant="contained" color="secondary">
              <p>Finalizar Compra</p>
            </Button>
          </div>
        </StyledDrawer>
      </MuiDrawer>
    </div>
  );
}
