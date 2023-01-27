import { AppBar, Box } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    background: #E5E5E5;
  }

  .flex {
    display: flex;
    justify-self: center;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 938px;
    gap: 20px;
    margin: 100px 0 100px 0;
  }
`;

export const StyledHeader = styled(AppBar)`
  position: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  div {
    display: flex;
    flex-direction: row;
    height: 2.75rem;
    align-items: center;
    margin-left: 1.5rem;
  }

  .title {
    display: flex;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 19px;
  }

  .subTitle {
    display: flex;
    align-items: end;
    height: 2rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin-left: 0.5rem;
  }

  button {
    display: flex;
    width: 52px;
    height: 26px;
    margin-right: 1.5rem;
    border-radius: 8px;

    p {
      margin-left: 0.2rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    }

    span {
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  @media (min-width: 960px) {
    height: 6.313rem;

    div {
      height: 2.75rem;
    }

    .title {
      margin-left: 4.063rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
    }

    .subTitle {
      height: 2rem;
      margin-left: 0.5rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
    }

    button {
      height: 2.813rem;
      width: 5.625rem;
      margin-right: 5.5rem;
      border-radius: 8px;

      p {
        margin-left: 0.2rem;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
      }

      span {
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 100%;
  background-color: #efefef;

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 250.5px;
  height: 328px;

  img {
    width: 127.8px;
    height: 158.82px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;

    .title {
      color: #2c2c2c;
      width: 100%;
      max-height: 43.73px;
      max-width: 142.77px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    span {
      background-color: #373737;
      border-radius: 5px;
      padding: 5px 10px;
      .price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        color: white;
      }
    }
  }

  .description {
    color: #2c2c2c;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    width: 100%;
    height: 36.72px;

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media (min-width: 960px) {
    width: 217.56px;
    height: 285px;

    img {
      width: 124px;
      height: 138px;
    }

    section {
      margin: 0px 10px;
      gap: 5px;
      .title {
        width: 100%;
        max-height: 38px;
        max-width: 120px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }

      .price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
      }
    }

    .description {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;
      margin-left: 10px;
      margin-right: 10px;
    }

    button {
      width: 100%;

      p {
        margin-top: 0.2rem;
      }
    }
  }
`;

export const StyledDrawer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  height: 100%;
  width: 340px;

  div.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    p {
      width: 178px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
      color: white;
    }

    button {
      background-color: black;
    }
  }

  .scroll-y {
    max-height: 52vh;
    overflow-y: scroll;
  }

  .card {
    display: flex;
    align-items: end;
    width: 260px;
    height: 220.05px;
    margin-top: 10px;
    margin-left: 10px;
    position: relative;

    .close {
      position: absolute;
      padding: 4px;
      background-color: transparent;
      right: 10px;
      top: 0;

      svg {
        color: black;
        height: 41px;
        width: 41px;
      }
    }

    .css-bhp9pd-MuiPaper-root-MuiCard-root {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 220.05px;
      border-radius: 8px;
      margin-top: 50px;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
        margin: 0 20px;

        .mobileDirection {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .count {
            display: flex;
            flex-direction: column;

            .qtd {
              display: none;
            }

            .buttons {
              display: flex;
              justify-content: center;
              align-items: center;
              border: 0.3px solid #bfbfbf;
              border-radius: 4px;

              p {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
              }

              hr {
                height: 20px;
              }
              .left {
                margin-right: 8px;
              }
              .right {
                margin-left: 8px;
              }

              button {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                border: none;
                height: 34.5px;
                width: 34.5px;
                cursor: pointer;

                p {
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 24px;
                  line-height: 29px;
                }
              }
            }
          }
        }

        img {
          width: 80px;
          height: 95px;
        }

        .title {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #2c2c2c;
        }

        .price {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          background-color: #373737;
          border-radius: 5px;
          height: 34.81px;
          width: 84px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 15px;
        }
      }
    }
  }

  div.price {
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: white;
    margin: 0 40px 42px 40px;
  }

  .container {
    width: 100%;
  }

  .confirm {
    width: 100%;
    height: 97px;
    border-radius: 0;
  }

  .confirm > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    text-transform: capitalize;
  }

  .info {
    display: flex;

    .count {
      display: flex;
    }
  }

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #0f52ba;
    height: 100%;
    width: 486px;

    div.header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      width: 100%;
      margin-bottom: 30px;

      p {
        width: 180px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
        color: white;
      }

      button {
        background-color: black;
      }
    }

    .scroll-y {
      max-height: 52vh;
      overflow-y: scroll;
    }

    .card {
      display: flex;
      align-items: end;
      width: 395px;
      height: 102px;
      margin-top: 10px;
      margin-left: 10px;
      position: relative;

      .close {
        position: absolute;
        padding: 4px;
        background-color: black;
        right: 10px;
        top: 0;

        svg {
          color: white;
          height: 17px;
          width: 17px;
        }
      }

      .css-bhp9pd-MuiPaper-root-MuiCard-root {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 379px;
        height: 95px;
        border-radius: 8px;
        margin-top: 50px;

        .info {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 20px;
          .mobileDirection {
            width: 50%;
            .count {
              display: flex;
              flex-direction: column;
              margin-bottom: 8px;

              .qtd {
                display: flex;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 5px;
                line-height: 6px;
                margin-bottom: 4px;
              }

              .buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 0.3px solid #bfbfbf;
                border-radius: 4px;

                p {
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 8px;
                  line-height: 10px;
                }

                button {
                  background-color: transparent;
                  border: none;
                  height: 19px;
                  width: 22px;
                  cursor: pointer;

                  p {
                    font-family: "Montserrat";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 15px;
                  }
                }
              }
            }
          }

          img {
            width: 46px;
            height: 57px;
          }

          .title {
            width: 113px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 17px;
          }

          .price {
            padding: 0;
            background-color: transparent;
            color: black;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }

    div.price {
      display: flex;
      justify-content: space-between;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      color: white;
      margin: 0 40px 42px 40px;
    }

    .container {
      width: 100%;
    }

    .confirm {
      width: 100%;
      height: 97px;
      border-radius: 0;
    }

    .confirm > p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      text-transform: capitalize;
    }

    .info {
      display: flex;

      .count {
        display: flex;
      }
    }
  }
`;
