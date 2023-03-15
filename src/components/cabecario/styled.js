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

header .logo span {
  color: #149A00;
}

`;