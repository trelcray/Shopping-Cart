import { AppBar } from "@mui/material";
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
  height: 6.313rem;

  div {
    display: flex;
    flex-direction: row;
    height: 2.75rem;
    align-items: center;
  }

  .title {
    display: flex;
    font-family: "Montserrat";
    font-style: normal;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 19px;
    margin-left: 4.063rem;
  }

  .subTitle {
    display: flex;
    align-items: end;
    height: 2rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 19px;
    margin-left: 0.5rem;
  }

  button {
    display: flex;
    height: 2.813rem;
    width: 5.625rem;
    margin-right: 5.5rem;
    border-radius: 8px;

    p {
      margin-top: .2rem;
      margin-left: 0.2rem;
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
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 217.56px;
  gap: 10px;

  img {
    width: 124px;
    height: 138px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  section {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .title {
    width: 100%;
    max-height: 38px;
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
      margin-top: .2rem;
    }
  }
`;
