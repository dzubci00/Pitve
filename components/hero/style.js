import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 100vh;
  width:100%;
  background-color: #035865;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 100;
 
`;

export const Overlay = styled.div`
  flex: none;
  height: 300px;
  width: 560px;
  left: calc(50% - 561px / 2);
  overflow: hidden;
  position: absolute;
  transform: perspective(1200px);
  background: linear-gradient(180deg,rgba(1,1,1,.51) 0%,rgba(35,35,35,0) 100%);
  filter: blur(0.5px);
  z-index: 1;

  @media only screen and (max-width: 600px) {
  background: rgba(0, 0, 0, 0.2); 
  top:0;
  left:0;
  width: 100%;
  height:100%;
}
`;

export const WrapText = styled.div`
  position: relative;
  z-index: 5;
  width: 47.4rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;

  a{
    text-decoration:none;
    width:auto;     
  }
  
  @media only screen and (max-width: 400px) {
   width:100%;
  }
`;
export const WrapImage = styled.div`
  position: absolute;
  height: 100%;
  width:100%;
`;
export const Title = styled.h1`
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 89.61px;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin: 2rem 0 0 0;
  text-transform: uppercase;
  
  @media only screen and (max-width: 900px) {
    font-size: 44px;
    line-height: 77.01px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 31px;
    line-height: 50px;
  }
`;
export const SubTitle = styled.p`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height:27.68px;
  text-align: center;
  color: #ffffff;

  @media only screen and (min-width: 1800px) {
    margin:0 30px;
    }
  @media only screen and (max-width: 1200px) {
      line-height: 25px;
    }
  @media only screen and (max-width: 900px) {
  font-size: 16px;
  line-height:22px;
    }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height:18px;
    }
  @media only screen and (max-width: 400px) {
    margin: 0 1rem;
  }
`;
