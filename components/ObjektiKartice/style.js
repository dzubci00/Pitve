import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

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

export const WrapPhoto = styled.div`
  position: relative;
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 56%;

  @media only screen and (max-width: 600px) {
    height: 55vh;
  }
  @media only screen and (max-width: 420px) {
  }
`;


export const WrapImageDivider = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin-top: 5rem;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Container = styled.div`
position: relative;
height: auto;
width: 100%;
margin: 0 auto;
-webkit-mask-image: linear-gradient(to right,rgb(0 0 0 / 65%) 0%,rgb(0,0,0) 12.5%,rgb(0,0,0) 87.5%,rgb(0 0 0 / 65%) 100%);
`;

export const SectionContainer = styled.section`
display: flex;
width: 100%;
height: 100%;
max-width: 100%;
max-height: 100%;
place-items: center;
margin: 0px;
padding: 10px;
list-style-type: none;
opacity: 1;
-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);
overflow: hidden;
`;

export const ContainerUl = styled.section`
display: flex;
width: 100%;
height: 100%;
max-width: 100%;
max-height: 100%;
place-items: center;
margin: 0px;
padding: 0px;
list-style-type: none;
gap: 0px;
position: relative;
flex-direction: row;
will-change: transform;
transform: translateX(-5576.08px);
`;



export const PopupBackground= styled.div`
.popup-content {
  margin: auto;
  background: rgb(255, 255, 255);
  width: 50%;
  padding: 5px;
}
.popup-arrow {
  color: rgb(255, 255, 255);
}
[role='tooltip'].popup-content {
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
}

.popup-overlay {
  background: rgba(0, 0, 0, 0.5);
}
[data-popup='tooltip'].popup-overlay {
  background: transparent;
}

`;

