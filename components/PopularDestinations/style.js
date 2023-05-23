import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  padding-bottom:80px;
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 38%;
    right: 0.4rem;
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

export const DistancesLocationsWrap = styled.div`
  position: relative;
  height: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  margin-bottom: 6rem;


  color: #000000;
  li::marker {
    color: #a55c3d;
  }
  
  @media only screen and (max-width: 600px) {
    align-items:center;
  }
`;
export const WrapImageDivider = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  width: 100%;
`;

export const Left = styled.div`
  position: relative;

`;
export const Right = styled.div`
  position: relative;

`;

export const WrapList = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction:column;
    ul{
      margin-top:0;
      margin-bottom:0;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  height: auto;
  width: 90%;
  margin: 0 auto;
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 0;
  height: 1900px;
  width: 100%;
  top:0;

  img{
    width:100%;
    height: 1900px;
  }
  @media only screen and (max-width: 1900px) {
  }
  @media only screen and (max-width: 450px) {
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

export const Image1 = styled.div`
  position:absolute;  
  height:670px;
  width: 100%;
  top:0;
  img {
    object-fit: cover;
  }
  -webkit-backface-visibility: hidden;
  
`;
