import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const OurHomeWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 142.5%;
  overflow: hidden;
  text-align: center;
  padding-bottom: 5rem;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
  
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapOtok = styled.div`
  position: absolute;
  z-index: 2;
  height: 50rem;
  width: 180%;
  top: 0;
  
`;
export const Title = styled.h1`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 5.5rem;
  text-align: center;
  color: #303145;
  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const SubTitle = styled.h3`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 3rem;
  text-align: left;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  color: #303145;
  
`;
export const WrapText = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 5rem auto 20rem auto;
  width: 97%;
  @media only screen and (min-width: 1800px) {
    margin: 5rem auto 5rem auto;
  }
  @media only screen and (max-width: 1800px) {
    margin: 5rem auto 17rem auto;
  }
  @media only screen and (max-width: 1500px) {
    margin: 5rem auto 25rem auto;
  }
  @media only screen and (max-width: 1500px) {
    margin: 5rem auto 20rem auto;
  }
  @media only screen and (max-width: 600px) {
    flex-direction:column-reverse;
    align-items:center;
    margin:0;
    width:100%;
  }
  
`;

export const Left = styled.div`
  position: relative;
  width: 50%;
  margin-right:1.5%;
  @media only screen and (max-width: 600px) {
    width:100%;
    display:flex;
    flex-direction:column;
    margin: 0 auto;

  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapLeftText = styled.div`
  position: relative;
  max-width: 400px;
  margin-left: auto;
  margin-right: 4rem;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    padding:0 3rem;
    margin-bottom:5rem;
    width: 100%;
    max-width:100%;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapRightText = styled.div`
  position: relative;
  width: 100%;
  margin-right: auto;
  @media only screen and (max-width: 600px) {
    padding:0 3rem;
    
    margin-bottom:5rem;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapTextImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;
export const Text = styled.p`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #303145;
  width: 100%;
  text-align: left;
 
`;
export const TextRight = styled.p`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #303145;
  width: 50%;
  text-align: left;
  margin-right:3rem;
  @media only screen and (max-width: 1500px) {
    width: 80%;
  };
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    margin:0;
  }
`;
export const WrapImg1 = styled.div`
  position: relative;
  width: 100%;
  height: 41.5rem;
  @media only screen and (max-width: 600px) {
    height: 200px;
  }
  
`;
export const WrapImg2 = styled.div`
  position: relative;
  width: 100%;
  height: 27.5rem;
  @media only screen and (max-width: 600px) {
    height:34.5rem;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapImg3 = styled.div`
  position: relative;
  width: 37.7rem;
  height: 59.6rem;
 
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapImg4 = styled.div`
  position: relative;
  width: 40.2rem;
  height: 35.8rem;
  top: -28.9rem;
  margin:2rem 1rem 2rem 0;
  @media only screen and (max-width: 1500px) {
    top: -15.8rem;
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    height: 41.5rem;
    margin:0;
    top:0;
  }
  @media only screen and (max-width: 600px) {
    display:none;
  }
`;
export const WrapImg6 = styled.div`
  position: relative;
  width: 40.3rem;
  height: 53.5rem;
  top: -31.9rem;
  margin:2rem 0 2rem 1rem;
   @media only screen and (max-width: 1500px) {
    top: -21.9rem
  }
   @media only screen and (max-width: 600px) {
    width: 47rem;
    height: 61rem;
    top: 0;
    margin:0;
   }
   @media only screen and (max-width: 600px) {
    display:none;
   }
  
`;
export const WrapImg5 = styled.div`
  position: relative;
  width: 20.4rem;
  height: 34.5rem;
  top: -31.5rem;
  margin:2rem 1rem;
  z-index:2;
  @media only screen and (max-width: 1500px) {
    top: -18.5rem;
    
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 69rem;
    height: 61rem;
    left: 3px;
    top: -8px
}
   
   }
`;
export const WrapImg8 = styled.div`
  position: relative;
  width: 20.4rem;
  height: 34.5rem;
  top: -31.5rem;
  margin:2rem 1rem;
  z-index:0;
 
  }
  @media only screen and (max-width: 600px) {
    width: 69rem;
    margin: 0;
    height: 61rem;
    top: -68px;
    left: 10px;
  }

`;
export const WrapImg9 = styled.div`
  position: relative;
  width: 20.4rem;
  height: 34.5rem;
  top: -31.5rem;
  margin:2rem 1rem;
 
  @media only screen and (max-width: 600px) {
    width: 67rem;
    height: 53rem;
    top: 0;
    margin: 0;
    left: -10px;
  }

`;
export const WrapImg7 = styled.div`
  position: relative;
  width: 40.4rem;
  height: 39.5rem;
  top: -6.8rem;
  margin:2rem 0 2rem 1rem;
  @media only screen and (max-width: 900px) {
   display:none;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Right = styled.div`
  position: relative;
  width: 50%;
  margin-left:1.5%;
  @media only screen and (max-width: 600px) {
    width:100%;
    margin:0;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Bottom = styled.div`
  position: relative;
  display: flex;
  height: 29rem;
  width: 97%;
  justify-content: space-evenly;
  argin-top: 100px;
  margin: 0 auto;
  @media only screen and (max-width: 900px) {
  margin-top: 202px
}
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 0rem;
    margin-bottom: 30rem;
}
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 1px;
    top: -65px;
    height: 300px;
  }
`;

export const Wrap2Images = styled.div`
  
  @media only screen and (max-width: 600px) {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 100%;
  }
  
`;