import styled from "styled-components";

export const WrapMobileMenu = styled.div`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 50rem;
  height: 57rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10rem 0 6rem 0;
  transform: ${(props) =>
    props.isOpen ? `translate(0, 0rem)` : `translate(50rem, 0)`};
  transition: all 0.5s ease-in-out;
  opacity: 0.95;
  background: radial-gradient(
    61.32% 215.39% at 93.04% 39.63%,
    #3ca0c9 0%,
    #1e7ca4 100%
  );
  @media screen and (max-width: 600px) {
    /*  width: 100%;
  max-width: 74rem; */
  }
`;
export const SingleLink = styled.div`
  position: relative;
  margin: 0 1rem;
  font-size:20px;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;

    margin: 0 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
  }
`;
export const CloseIcon = styled.div`
  position: absolute;
  z-index: 5;
  top: 5.2rem;
  right: 4rem;
  height: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 400px) {
    right: 2.5rem;
  }
`;
export const LineX1 = styled.div`
  position: relative;
  height: .3rem;
  width: 2.3rem;
  background-color: white;
  transform: rotate(45deg);
  @media screen and (max-width: 1000px) {
  }
`;
export const LineX2 = styled.div`
  position: relative;
  height: .3rem;
  width: 2.3rem;
  background-color: white;
  transform: rotate(315deg) translate(.6rem, -0.7rem);
  @media screen and (max-width: 1000px) {
  }
`;
