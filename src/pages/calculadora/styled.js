import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  background-color: #000;
  width:100%;
  align-items: center; 

  .box-content {
    margin-top: 5em;
    background-color: #fff;
    width: 75%;
    border-radius: 10px;
    padding: 3em 3em;
    margin: 5em;

  }

  .boxActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .boxButtons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 50%;
      font-size: 30px;
      font-family: 'Inter';

      .AddForm {
        width: 40%;
        height: 60px;
        color: #149A00;
        background: #D2EEDF;
        border-radius: 15px;
        border: solid 0px;
        font-weight: 800;
        font-size: 17px;
      }

      .resolve {
        width: 40%;
        height: 60px;
        border: solid 0px;
        background: #290AEB;
        border-radius: 15px;
        font-weight: 800;
        color: #fff;
        font-size: 17px;
      }
    }
  }
`