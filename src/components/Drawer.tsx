import { Drawer as MuiDrawer } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import { StyledDrawer } from "@/styles/styled";
import { Close, ShoppingCart } from "@mui/icons-material";
import { Card } from "./Card";
import { useState } from "react";

export function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="contained"
        color="info"
        startIcon={<ShoppingCart color="secondary" />}>
        <Typography color="secondary">0</Typography>
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
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="container">
            <div className="price">
              <p>total:</p>
              <p>R$798</p>
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
