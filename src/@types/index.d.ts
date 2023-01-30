import { Dispatch } from "react";

export interface ICardProps {
  id: string;
  name: string;
  quantity: number;
  price: string;
  photo: string;
}

export interface IProductsProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
}

export interface ICartProductProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
  addToCart: (data: IProductsProps) => void;
}

export interface ICartProductsSliceProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

interface ICartSliceState {
  products: ICartProductsSliceProps[];
}

export interface IToastProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}