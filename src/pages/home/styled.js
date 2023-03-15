import styled from "styled-components"; 

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.style?.backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

.content{
    margin-bottom: 90px;
    padding:3rem 9%;
}

.home .content h3{
  font-size: 5rem;
  color: #fff;
  width: 40rem;
}

.btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 1.8rem;
    border: 0.1rem solid #ffffff;
    background: #149A00;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    text-transform: capitalize;
}
  
.btn:hover {
    background: #f8f8f8;
    color: #149A00  ;
    border: 0.1rem solid #149A00 ;
}





@media (max-width:1200px){

  html{
    font-size: 55%;
  }

}

@media (max-width:991px){

  header{
    padding:2rem 4%;
  }

  section{
    padding:3rem 4%;
    
  }

}

@media (max-width:768px){

  .home{
    justify-content: center;
    background-position: left;
  }

  .home .content{
    text-align: center;
  }

  .home .content span{
    font-size: 2rem;
  }

  .home .content h3{
    font-size: 4rem;
    width:auto;
  }

}
`