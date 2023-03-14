import styled from "styled-components";

export const Container = styled.div`
  /* *{border:solid 2px red;} */
  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
   
  }
 
  .input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
  }
  .input-box label {
    font-size: 22px;
  }
  input[name="firstname"] {
    width: 198px;
    height: 60px;
  }
  input[name="apostar"] {
    width: 210px;
    height: 60px;
  }
  input[name="currency"] {
    width: 300px;
    height: 60px;
  } input[name="lucro"] { color:#fff;
    width: 300px;
    height: 60px;
    background-color:#149a00;
  }
  .input-box input { 
    outline: none;
    text-align: center;
    /* color: #149a00; */
    border: none;
    border: 1px solid #b8b5b5;
    border-radius: 15px;
    /* background-color: transparent; */
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.9rem;
 margin:3px;
  }

  .input-box input::placeholder {
    color: #000000be;
  }

  @media screen and (max-width:480px){
    input[name="firstname"] {
    width: 198px;
    height: 40px;
  }
  input[name="apostar"] {
    width: 210px;
    height: 40px;
  }
  input[name="currency"] {
    width: 250px;
    height: 40px;
  } input[name="lucro"] { color:#fff;
    width: 250px;
    height: 40px;
    background-color:#149a00;
  }
  .input-box label {
    font-size: 18px;
  }

  }  @media screen and (max-width: 320px){
    input[name="firstname"] {
    width: 198px;
    height: 40px;
  }
  input[name="apostar"] {
    width: 210px;
    height: 40px;
  }
  input[name="currency"] {
    width: 250px;
    height: 40px;
  } input[name="lucro"] { color:#fff;
    width: 250px;
    height: 40px;
    background-color:#149a00;
  }
  .input-box label {
    font-size: 18px;
  }

  }
`;
