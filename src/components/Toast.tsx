import { StyledToast } from "@/styles/styled";
import { Alert } from "@mui/material";
import { Stack } from "@mui/material";
import { Dispatch } from "react";

interface IToastProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

export function Toast({ isOpen, setIsOpen }: IToastProps) {
  return (
    <StyledToast>
      {isOpen && (
        <Alert onClose={() => setIsOpen(!isOpen)}>
          Produto Adicionado com sucesso!
        </Alert>
      )}
    </StyledToast>
  );
}