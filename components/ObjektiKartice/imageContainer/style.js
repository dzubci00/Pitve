import styled from "styled-components";

export const HeroWrap = styled.a`
  position: relative;
  height: auto;
  width:100%;
   
`;
export const WrapImage = styled.div`
  position: relative;
  height: 476px;
  width: 100%;
  background: #cdcdcd;
  overflow: hidden;
  @media only screen and (max-width: 1920px) {
    width: 100%;
    height:432px;
}

  @media only screen and (max-width: 900px) {
    width: 100%;
    height:285px;
}
@media only screen and (max-width: 600px) {
    width: 100%;
    height:242px;
}
  
`;



