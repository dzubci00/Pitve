import styled from "styled-components";

export const HeroWrap = styled.a`
  position: relative;
  height: auto;
  width:90%;
  padding-bottom: 8rem;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  text-decoration: none;
   
`;
export const WrapImage = styled.div`
  position: relative;
  height: 32.6rem;
  width: 100%;
  background: #cdcdcd;
  border-radius: 1.7rem 1.7rem 0rem 0rem;
  overflow: hidden;
  
`;
export const Line = styled.div`
  position: relative;
  height: .3rem;
  width: 5.4rem;
  background-color: #a55c3d;
  margin: 3rem 0 1.5rem 0;
 
`;

export const Title = styled.h3`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #303145;
  margin: 0rem 0 1.5rem 0;

`;
export const Text = styled.p`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #303145;
  width: 90%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
