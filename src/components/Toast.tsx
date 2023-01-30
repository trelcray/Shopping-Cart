import { StyledToast } from "../styles/styled";
import { Alert } from "@mui/material";
import { IToastProps } from "../@types";

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
