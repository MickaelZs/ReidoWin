import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  align-items: center;

  .box-content {
    margin-top: 5em;
    background-color: #fff;
    width: 75%;
    border-radius: 10px;
    padding: 3em 3em;
    margin: 8em;
  }
  .links {
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
    justify-content: center;
    align-items: center;

    a {
      outline: none;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .bt {
    margin-bottom: 2em;
    background-color: #149a00;
    color: #fff;
    border: none;
    align-items: center;
    text-align: center;
    display: flex;
    cursor: pointer;

    justify-content: space-around;
    border-radius: 15px;
    width: 29%;
    font-size: 20px;
    text-align: center;
    height: 97px;
    .i {
      width: 10%;
    }
  }
  .bt-curso {
    border: solid 2px red;
    background-color: #149a00;
    color: #fff;
    border: none;
    align-items: center;
    text-align: center;
    display: flex;

    justify-content: space-around;
    border-radius: 15px;
    width: 29%;
    font-size: 18px;
    height: 97px;
    img {
      width: 25%;
    }
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
      font-family: "Inter";

      .AddForm {
        width: 40%;
        height: 60px;
        color: #149a00;
        background: #d2eedf;
        border-radius: 15px;
        border: solid 0px;
        font-weight: 800;
        font-size: 17px;
      }

      .resolve {
        width: 40%;
        height: 60px;
        border: solid 0px;
        background: #290aeb;
        border-radius: 15px;
        font-weight: 800;
        color: #fff;
        font-size: 17px;
      }
    }
  }
  
  @media screen and (min-width: 320px) and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    align-items: center;
    justify-content: center;

    .box-content {
      margin-top: 5em;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      padding: 3em 3em;
      margin: 7em;
    }
    .boxActions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .boxButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 50%;
        font-size: 30px;
        font-family: "Inter";

        .AddForm {
          width: 80%;
          height: 60px;
          color: #149a00;
          background: #d2eedf;
          border-radius: 15px;
          border: solid 0px;
          font-weight: 800;
          font-size: 17px;
          margin: 1em;
        }
        .resolve {
          width: 80%;
          margin: 1em;
          height: 60px;
          border: solid 0px;
          background: #290aeb;
          border-radius: 15px;
          font-weight: 800;
          color: #fff;
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    align-items: center;
    justify-content: center;

    .box-content {
      margin-top: 5em;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      padding: 3em 3em;
      margin: 7em;
    }
    .boxActions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .boxButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 50%;
        font-size: 30px;
        font-family: "Inter";

        .AddForm {
          width: 80%;
          height: 60px;
          color: #149a00;
          background: #d2eedf;
          border-radius: 15px;
          border: solid 0px;
          font-weight: 800;
          font-size: 17px;
          margin: 1em;
        }
        .resolve {
          width: 80%;
          margin: 1em;
          height: 60px;
          border: solid 0px;
          background: #290aeb;
          border-radius: 15px;
          font-weight: 800;
          color: #fff;
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (min-width: 601px) and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    align-items: center;
    justify-content: center;

    .box-content {
      margin-top: 5em;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      padding: 3em 3em;
      margin: 7em;
    }
    .boxActions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .boxButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 50%;
        font-size: 30px;
        font-family: "Inter";

        .AddForm {
          width: 100%;
          height: 60px;
          color: #149a00;
          background: #d2eedf;
          border-radius: 15px;
          border: solid 0px;
          font-weight: 800;
          font-size: 17px;
          margin: 1em;
        }
        .resolve {
          width: 100%;
          margin: 1em;
          height: 60px;
          border: solid 0px;
          background: #290aeb;
          border-radius: 15px;
          font-weight: 800;
          color: #fff;
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .links {
      display: flex;
      flex-direction: column;
      margin-bottom: 3em;
      justify-content: center;
      align-items: center;

      a {
        outline: none;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .bt {
      margin-bottom: 2em;
      background-color: #149a00;
      color: #fff;
      border: none;
      align-items: center;
      text-align: center;
      display: flex;
      cursor: pointer;

      justify-content: space-around;
      border-radius: 15px;
      width: 80%;
      font-size: 20px;
      text-align: center;
      height: 88px;
      .i {
        width: 10%;
      }
    }
    .bt-curso {
      border: solid 2px red;
      background-color: #149a00;
      color: #fff;
      border: none;
      align-items: center;
      text-align: center;
      display: flex;

      justify-content: space-around;
      border-radius: 15px;
      width: 80%;
      font-size: 18px;
      height: 88px;
      img {
        width: 25%;
      }
    }
  }




  @media screen and (min-width: 481px) and (max-width: 600px) {
    .links {
      display: flex;
      flex-direction: column;
      margin-bottom: 3em;
      justify-content: center;
      align-items: center;

      a {
        outline: none;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .bt {
      margin-bottom: 2em;
      background-color: #149a00;
      color: #fff;
      border: none;
      align-items: center;
      text-align: center;
      display: flex;
      cursor: pointer;

      justify-content: space-around;
      border-radius: 15px;
      width: 80%;
      font-size: 20px;
      text-align: center;
      height: 88px;
      .i {
        width: 10%;
      }
    }
    .bt-curso {
      border: solid 2px red;
      background-color: #149a00;
      color: #fff;
      border: none;
      align-items: center;
      text-align: center;
      display: flex;

      justify-content: space-around;
      border-radius: 15px;
      width: 80%;
      font-size: 18px;
      height: 88px;
      img {
        width: 25%;
      }
    }
  }  @media screen and (min-width: 600px) and (max-width: 768px) {
    .links {
      display: flex;
      flex-direction: column;
      margin-bottom: 3em;
      justify-content: center;
      align-items: center;

      a {
        outline: none;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .bt {
      margin-bottom: 2em;
      background-color: #149a00;
      color: #fff;
      border: none;
      align-items: center;
      text-align: center;
      display: flex;
      cursor: pointer;

      justify-content: space-around;
      border-radius: 15px;
      width: 80%;
      font-size: 20px;
      text-align: center;
      height: 88px;
      .i {
        width: 10%;
      }
    }
    .bt-curso {
      border: solid 2px red;
      background-color: #149a00;
      color: #fff;
      border: none;
      align-items: center;
      text-align: center;
      display: flex;

      justify-content: space-around;
      border-radius: 15px;
      width: 80%;
      font-size: 18px;
      height: 88px;
      img {
        width: 25%;
      }
    }
  }
`;
