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

      margin-right: 4em;
    }

    
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

`;
