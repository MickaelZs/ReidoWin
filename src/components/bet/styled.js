import styled from "styled-components";

export const Container = styled.div`
  /* *{border:solid 2px red;} */
  .form {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;

    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      line-height: 36px;
    }
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  
  }

`;
