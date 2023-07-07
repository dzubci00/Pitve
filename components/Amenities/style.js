import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow:hidden;
  @media only screen and (max-width: 600px) {
    height: auto;
    align-items:center;
  }
`;

export const Grid = styled.div`
  display: grid;
  z-index: 10;
  margin: 0 auto;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 0;

  ul{
    list-style-position:outside;
    margin-top:5px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 4 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 4 / 4;
  }
  .div4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div5 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .div6 {
    grid-area: 2 / 1 / 4 / 2;
  }

  @media only screen and (min-width: 1118px) {
  padding-bottom:50px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 4rem;
    height: auto;
    width: 80%;
    grid-row-gap:2rem;
   
    div {
      padding-right: 0rem;
      ul{
        margin-top:5px;
      }

    }
    .div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .div2 {
      grid-area: 1 / 2 / 3 / 3;
    }
    .div3 {
      grid-area: 3 / 2 / 5 / 3;
    }
    .div4 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .div5 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .div6 {
      grid-area: 4 / 1 / 6 / 2;
    }
  }

  @media only screen and (max-width: 600px) {
    ul{
     margin:0 0 0 auto;
    }
  }
  @media only screen and (max-width: 430px) {
    grid-row-gap:0;
  }


`;
export const WrapImage = styled.div`
  position: absolute;
  z-index: 0;
  width:2000px;
  height:2500px;
  
  img{
    width:2000px;
  height:2500px;
  }

`;
export const Title = styled.h1`
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 54.56px;
  text-align: center;
  margin: 5rem auto 3rem auto;
  z-index:1;

  color: #303145;
  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h3`
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #303145;
  @media only screen and (max-width: 900px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Text = styled.div`
  font-family: "Civane-NorLig";
  font-weight: 100;
  font-size: 15px;
  line-height: 21px;
  color: #303145;

  ul {
    padding-left: 10px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 18px;
  }
`;
