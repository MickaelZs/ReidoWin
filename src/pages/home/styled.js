import styled from "styled-components"; 

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(172.23deg, #000000 4.94%, rgba(0, 0, 0, 0.35) 45.74%, rgba(0, 0, 0, 0.9) 92.94%),  url(${(props) => props.style?.backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding:3rem 9%;

  .btn {

display: inline-block;
margin-top: 2rem;
padding: 1rem 3rem;
background: #149A00;
color: #fff;
cursor: pointer;
border-radius: .5rem;
font-size: 1.7rem;
}


.btn:hover {
  background: #f8f8f8;
  color: #149A00  ;
  border: 0.1rem solid #149A00 ;
}

 h3{
  font-size: 6rem;
  color: #fff;
  width:60rem;
  text-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
}

@media (max-width:768px){

.home{
  justify-content: center;
  background-position: left;
}

.home .content{
  text-align: center;
}

h3{
  font-size: 4rem;
  width:auto;
}

}

`