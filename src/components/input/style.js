import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 7px 0 1.6em;
  }
  font-size: 20px;
  font-family: "Inter";
  font-weight: 800;
  
`;

export const Input = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  -moz-appearance: textfield;
  appearance: textfield;
  width: 200px;
  height: 30px;
  left: 602px;
  top: 246px;
  padding: 1em;
  border: 1px solid #b8b5b5;
  border-radius: 15px;

  @media screen and (max-width: 320px) {
    width: 200px;
    height: 10px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 10px;
  } @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 10px;
  }
`;
