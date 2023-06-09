import styled from "styled-components";

export const Container = styled.div`
 /* *{border:solid 2px red;} */
  margin: 1em 0 2em;
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
      
    } 
    @media screen and (max-width: 480px) {
        span {
          font-size: 20px;
        }
        
    } 
    @media screen and (max-width: 772px) {
        span {
          font-size: 22px;
        }
        
      }
    .index-trash {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 0.3em;
      }

      img {
        width: 30px;
      }

      margin-right: 2em;
    }
  }
  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%; 
  }
  @media screen and  (min-width: 320px) and (max-width: 563px) {
    .input-group {
      display: flex;
      width:50%;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and  (min-width: 721px) and (max-width: 751px) {
    .input-group {
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }
`;
