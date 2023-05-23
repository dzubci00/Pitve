import styled from "styled-components";

export const NavbarWrap = styled.div`
  position: absolute;
  z-index: 20;
  width: 80%;
  height: 96px;
  display: flex;
  align-items: center;
  top: 0;
  
  @media screen and (max-width: 900px) {
    width: 90%;
   }

`;
export const LogoWrap = styled.div`
  position: relative;
  width: 67px;
  min-width: 67px;
  height: 67px;
  z-index: 20;
  cursor: pointer;
  background-color: #303145;
  /* left: 30rem; */
  /* top: 30px; */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s ease-in-out;
  transform: ${(props) =>
    props.inView ? `translate(0%,0%)` : `translate(0,-100%)`};
  border-radius: 50%;
 /*  padding: 2rem; */

  @media screen and (max-width: 1051px) {
   /*  top: 8rem; */
    /* left: 25%; */
  }
`;

export const LinkWrap = styled.div`
  margin-left: auto;
  position: relative;
  width: 29rem;
  min-width: 45rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    width: 55rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const Hamburger = styled.div`
  position: absolute;
  z-index: 4;
  right: 4rem;
  height: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
 
  @media screen and (min-width: 700px) {
    display: none;
  }
  @media screen and (max-width: 700px){
   
  }
`;
export const CloseIcon = styled.div`
  position: absolute;
  z-index: 4;
  top: 5.2rem;
  right: 4rem;
  height: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
export const LineX1 = styled.div`
  position: relative;
  height: .3rem;
  width: 2.3rem;
  background-color: #32bde3;
  transform: rotate(45deg);
  @media screen and (max-width: 1000px) {
  }
`;
export const LineX2 = styled.div`
  position: relative;
  height: .3rem;
  width: 2.3rem;
  background-color: #32bde3;
  transform: rotate(315deg) translate(.6rem, -0.7rem);
  @media screen and (max-width: 1000px) {
  }
`;
export const Line = styled.div`
  height: .3rem;
  width: 2.3rem;
  background-color: white;
  @media screen and (max-width: 1000px) {
  }
`;
export const SingleLink = styled.div`
  position: relative;
  margin: 0 1rem;
  text-decoration: none;
  color: #aea8b2;
  margin: 0 0;
  font-size:18px;

  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
    margin: 0 0;
    cursor: pointer;
    font-family: "Civane-NorReg";
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: white;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const BookNow = styled.a`
  text-decoration:none;
  @media screen and (max-width: 1000px) {
  }
`;
