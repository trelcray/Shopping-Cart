import { StyledHeader } from "@/styles/styled";
import { Drawer } from "./Drawer";

interface Props {}

export function Header({}: Props) {
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
