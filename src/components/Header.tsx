import { StyledHeader } from "../styles/styled";
import { Drawer } from "./Drawer";

export function Header() {
  return (
    <StyledHeader>
      <div>
        <p className="title">MKS</p>
        <p className="subTitle">Sistemas</p>
      </div>
      <Drawer />
    </StyledHeader>
  );
}
