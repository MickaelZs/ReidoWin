import styled from "styled-components";

export const Container = styled.div`
  /* *{border:solid 2px red;} */
  /* display: flex;
  align-items: center;
  justify-content: center; */

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    background-color: #f5f6fa;
    width: 95%;
    height: 90%;
    border-radius: 15px; 
  }
  /* .input-group{display:flex; justify-content:space-between;} */
  .a{display: flex;
    justify-content: space-between;
    align-items: center;}

  .group {
    display: flex;
    justify-content: center;
    align-items: center ; flex-grow:1; flex-wrap:wrap;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
  }

  .input input {
    width: 300px;
    height: 60px;
    outline: none;

    border: 1px solid #b8b5b5;
    border-radius: 15px;
  } .input label {
   font-size:22px;
  }
  .botoes {
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap; flex-grow:1;
  }
  .bt-add {
    width: 300px;
    height: 60px;
    color: #149a00;
    border: none;
    background: #d2eedf;
    border-radius: 15px;
  }
  .bt-cal {
    background: #290aeb;
    border: none;
    border-radius: 15px;
    color: #fff;
    width: 300px;
    height: 60px;
  } @media screen and (max-width: 320px){
    .input input {
    width: 250px;
    height: 40px;
    outline: none;

    border: 1px solid #b8b5b5;
    border-radius: 15px;
  } .input label {
   font-size:18px;
  } .bt-add {
    width: 250px;
    height: 40px;
    color: #149a00;
    
  }
  .bt-cal {
    
    color: #fff;
    width: 250px;
    height: 40px;

  } } @media screen and (max-width: 480px){
    .input input {
    width: 250px;
    height: 40px;
    outline: none;

    border: 1px solid #b8b5b5;
    border-radius: 15px;
  } .input label {
   font-size:18px;
  } .bt-add {
    width: 250px;
    height: 40px;
    color: #149a00;
    
  }
  .bt-cal {
    
    color: #fff;
    width: 250px;
    height: 40px;

  } }
`;
