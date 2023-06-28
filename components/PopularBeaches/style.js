import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top:80px; */
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 38%;
    right:0.4rem;
    width: 0rem;
    height: 0rem;
    cursor: pointer;
    color: black;

    @media only screen and (max-width: 900px) {
      right: 2rem;
      top: 43%;
    }

    @media only screen and (max-width: 600px) {
      right: 4rem;
      top: 50%;
    }
  }
  .loaderNext {
    border: .2rem solid #f3f3f349;
    border-radius: 50%;
    border-top: .2rem solid #ffffffb4;
    width: 6rem;
    height: 6rem;
    -webkit-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite;
  }
  
  .wrapLoaderPrev {
    position: absolute;
    z-index: 20;
    top: 38%;
    left: -6.6rem;
    width: 0rem;
    height: 0rem;
    cursor: pointer;
    color: black;

    @media only screen and (max-width: 900px) {
      left: -5.6rem;
      top: 43%;
    }

    @media only screen and (max-width: 600px) {
      left: -3.3rem;
      top: 50%;
    }
  }
  .loaderPrev {
    border: .2rem solid #f3f3f349;
    border-radius: 50%;
    border-top: .2rem solid #ffffffb4;
    width: 6rem;
    height: 6rem;
    -webkit-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite;
  }
  .arrow {
    position: absolute;
    top: 1.9rem;
    left: 1.9rem;
    opacity: 1;
  }
  .slick-dots {
    top: .9rem;
  }
  .slick-list {
    z-index: 20;
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 0;
  height: 1000px;
  width: 100%;
  top:0;

  img{
    width:100%;
    height: 1000px;
    transition: transform 0.1s ease;
  }
  @media only screen and (max-width: 1900px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Container = styled.div`
position: relative;
height: auto;
width: 90%;
margin: 0 auto;

`;
export const WrapArrow = styled.div`
  position: absolute;
  height: auto;
  right: 0;
  top: 6rem;
  left: 80%;
  @media only screen and (max-width: 1050px) {
  }
`;
export const Title = styled.h3`
position: relative;
font-family: "Civane-NorMed";
font-style: normal;
font-weight: 400;
font-size: 44px;
line-height: 55px;
text-align: center;
margin:0 2rem 2.5rem 2rem;

color: #303145;
@media only screen and (max-width: 600px) {
  font-size: 28px;
  line-height: 35px;
  margin-bottom:2.5rem;
}
`;
