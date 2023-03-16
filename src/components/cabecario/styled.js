import styled from "styled-components";

export const Container = styled.div`

  header{
  position: absolute;
  top:0; left: 0; right: 0;
  z-index: 10000;
 
  padding:2rem 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.insta{

  width: 72px;
height: 72px;
}

header .logo {
  font-size: 3.5rem;
  color: #727272;
  font-weight: bolder;
}

.logo {
  -webkit-stroke-color: #FFF;
   stroke-width: 1px;
   text-decoration: none;
   text-shadow: 
      -1px -1px 0px #FFF, 
      -1px 1px 0px #FFF,                    
      1px -1px 0px #FFF,                  
      1px 0px 0px #FFF;
}

header .logo span {
  color: #149A00;
}
@media screen and (min-width: 320px) and (max-width: 11200px){
  .insta{

width: 40px;
height: 40px;
}

header .logo {
font-size: 2.5rem;
color: #727272;
font-weight: bolder;
}
  }
`;