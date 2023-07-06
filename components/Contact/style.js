import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const Wrap = styled.div`
position: relative;
width: 100%;
height: 430px;
padding-top: 80px;
overflow:hidden;

  @media only screen and (max-width: 700px) {
    height: auto;
    padding-bottom:80px;
  }
  
`;
export const WrapBg = styled.div`
position: absolute;
width:100%;
height: 750px;
top: 0;
 
img{
  width:100%;
  height: 100%;
  object-fit:cover;
  transition: transform 0.1s ease;
}


  @media only screen and (max-width: 700px) {
    height: 750px;
    img{
      height: 950px;
    }
  }

`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #303145;
  opacity: 0.88;
  top: 0;
  z-index: 2;

`;
export const Title = styled.h2`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  margin-bottom: 36px;
  @media only screen and (max-width: 600px) {
    font-size: 28px;
  line-height: 35px;
  }
 
`;

export const Name = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
  margin-bottom: 15px;
 
`;
export const Num = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;

  a{
    text-decoration:none;
    color:#ffffff;
    margin-top:10px;
  }

  a:hover {
    position: relative;
    font-weight:bold;
    transition:all 0.1s ease-in-out;
  }

  a:not(:hover){
    font-weight:normal;
    transition:all 0.1s ease-in-out;
  }
   
`;
export const Data = styled.div`
  position: relative;
  display: flex;
  z-index: 3;
  margin: 0 auto;
  width: 700px;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction:column;
    align-items:center;
    width:100%;
  }
 
`;
export const Tel = styled.div`
  position: relative;
  width: 33%;

  h3{
    margin-top:20px;
    margin-bottom:5px;  
   }  
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`;
export const Adress = styled.div`
  position: relative;
  width: 33%;

  h3{
    margin-top:20px;
    margin-bottom:5px;  
   }  
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`;
export const Email = styled.div`
  position: relative;
  width: 33%;

  h3{
    margin-top:20px;
    margin-bottom:5px;  
   }  
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 
`;

export const Buttons = styled.div`
  position: relative;
  display: flex;
  width: 550px;
  margin: 15px auto 0 auto;
  justify-content: space-evenly;

  a{
    text-decoration:none;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    flex-direction:column;
    align-items:center;
  }
  
`;
