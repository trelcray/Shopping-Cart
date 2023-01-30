import { StyledSkeleton } from "../styles/styled";
import { Skeleton as MuiSkeleton } from "@mui/material";

export function Skeleton() {
  return (
    <StyledSkeleton>
      <MuiSkeleton className="img" variant="rectangular" />
      <div className="section">
        <MuiSkeleton animation="wave" className="title" variant="text" />
        <MuiSkeleton animation="wave" className="price" variant="rounded" />
      </div>
      <MuiSkeleton animation="wave" className="description" variant="text" />
      <MuiSkeleton animation="wave" className="button" variant="rectangular" />
    </StyledSkeleton>
  );
}
