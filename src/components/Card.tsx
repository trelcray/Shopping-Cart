import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../redux/data.slice";
import { Close } from "@mui/icons-material";
import { Card as MuiCard, Divider, IconButton } from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ICardProps } from "../@types";
import { StyledCard } from "../styles/styled";

export function Card({ id, name, price, quantity, photo }: ICardProps) {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  const handleAddQuantity = (id: string) => {
    dispatch(incrementProduct(id));
  };
  const handleRemoveQuantity = (id: string) => {
    dispatch(decrementProduct(id));
  };
  return (
    <StyledCard>
      <IconButton
        onClick={() => handleDelete(id)}
        className="close"
        color="info"
        aria-label="close">
        <Close />
      </IconButton>
      <MuiCard>
        <div className="info">
          <Image alt="image of product" width={100} height={100} src={photo} />
          <p className="title">{name}</p>
          <div className="mobileDirection">
            <div className="count">
              <p className="qtd">Qtd:</p>
              <div className="buttons">
                <button
                  onClick={() => handleRemoveQuantity(id)}
                  disabled={quantity === 1}>
                  <p>-</p>
                </button>
                <Divider className="left" orientation="vertical" />
                <p className="quantity">{quantity}</p>
                <Divider className="right" orientation="vertical" />
                <button onClick={() => handleAddQuantity(id)}>
                  <p>+</p>
                </button>
              </div>
            </div>
            <p className="price">R${price}</p>
          </div>
        </div>
      </MuiCard>
    </StyledCard>
  );
}
