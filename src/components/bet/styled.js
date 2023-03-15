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
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      line-height: 36px;
    }
    @media screen and (max-width: 320px) {
      span {
        font-size: 20px;
      }
      
    } @media screen and (max-width: 480px) {
        span {
          font-size: 20px;
        }
        
      } @media screen and (max-width: 720px) {
        span {
          font-size: 22px;
        }
        
      }
  }
  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    .input-group {
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }
`;
