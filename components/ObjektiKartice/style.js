import styled from "styled-components";

export const HeroWrap = styled.div`
  position: relative;
  height: auto;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 40px;
  padding-bottom: 0px;


  @media only screen and (max-width: 700px) {
    margin-top: 0;
  }
  @media only screen and (max-width: 600px) {
    margin-top:40px;
  }
  @media only screen and (max-width: 500px) {
    margin-top:0;
  }
`;
export const WrapObjects = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items:center;
    margin:0 auto;
    width: 100%;
    
  }

`;

export const WrapImageDivider = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin-top: 5rem;
`;

export const Container = styled.div`
position: relative;
height: auto;
width: 100%;
margin: 0 auto;
-webkit-mask-image: linear-gradient(to right,rgb(0 0 0 / 65%) 0%,rgb(0,0,0) 12.5%,rgb(0,0,0) 87.5%,rgb(0 0 0 / 65%) 100%);
`;
