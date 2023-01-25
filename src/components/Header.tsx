import { StyledHeader } from "@/styles/styled";
import { Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

interface Props {}

export function Header({}: Props) {
  return (
    <StyledHeader>
      <div>
        <p className="title">MKS</p>
        <p className="subTitle">Sistemas</p>
      </div>
      <Button variant="contained" color="info" startIcon={<ShoppingCart color="secondary" />}>
        <Typography color="secondary">0</Typography>
      </Button>
    </StyledHeader>
  );
}
