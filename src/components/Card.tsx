import { Close } from "@mui/icons-material";
import { Card as MuiCard, Divider, IconButton } from "@mui/material";
import Image from "next/image";

interface Props {}

export function Card({}: Props) {
  return (
    <div className="card">
      <IconButton className="close" color="info" aria-label="close">
        <Close />
      </IconButton>
      <MuiCard>
        <div className="info">
          <Image
            alt="lol"
            width={100}
            height={100}
            src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
          />
          <p className="title">Iphone 11 128 GB</p>
          <div className="mobileDirection">
            <div className="count">
              <p className="qtd">Qtd:</p>
              <div className="buttons">
                <button>
                  <p>-</p>
                </button>
                <Divider className="left" orientation="vertical" />
                <p>1</p>
                <Divider className="right" orientation="vertical" />
                <button>
                  <p>+</p>
                </button>
              </div>
            </div>
            <p className="price">R$5.000</p>
          </div>
        </div>
      </MuiCard>
    </div>
  );
}
