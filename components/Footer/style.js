import styled from "styled-components";

export const HeroWrap = styled.div`
  position: relative;
  height: 650px;
  width: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #a55c3d;
  align-items: center;
  @media only screen and (max-width: 950px) {
    height: 690px;
  }
`;

export const WrapImage = styled.div`
  position: relative;
  height: 180px;
  width: 120px;
  z-index: 4;
  
`;

export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
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
    font-family: "Civane-NorMed";
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
  }

  @media only screen and (max-width: 700px) {
    margin: 0px 10px;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom:3px;
  }
`;

export const LinkWrap = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;

  @media only screen and (max-width: 700px) {
    width:100%;
    justify-content: center;
  }
  @media only screen and (max-width: 600px) {
    width:70%;
    justify-content: center;
  }
  @media only screen and (max-width: 400px) {
    width:80%;
    justify-content: center;
  }

`;

export const Divider = styled.div`
  position: relative;
  top: 3px;
  height: 16px;
  width: 1px;
  background-color: #c6c6c6;
  
`;
export const WrapBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  
`;
export const WrapImageDown = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 3;
  transition: all 10s ease-out;
  top: ${(props) => (props.inView ? ` -30px;` : `0px;`)};
  
`;

export const Bottom = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;  
  position: absolute;
  width: 100%;
  height: auto;
  padding-top: 30px;
  padding-bottom:40px;
  bottom: 0;
  z-index: 3;
  background: #303145;
  opacity: 0.88;
  font-size:16px;
  line-height:22px;
  font-weight: 500;

  a{
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 950px) {
    height:175px;
  }
  
`;

export const Upper = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  width: 100%;
  margin-bottom:20px;
  font-size:15px;
  line-height:21px;
  font-weight: 400;
  div{
    margin-bottom:3px;
  }

  @media only screen and (max-width: 950px) {
    flex-direction:column;
    align-items:center;
    /* margin-bottom:3rem; */
  }
 
`;
export const Mid = styled.div`
  position: relative;
  padding: 0 30px;
  margin: 0 30px;
  border-left-style: solid;
  border-right-style: solid;
  @media only screen and (max-width: 950px) {
    border-left-style: none;
    border-right-style: none;
    padding:0;
    margin:0;
  }
 
`;

export const BookNow = styled.a`
  text-decoration:none;
`;


export const WrapImageAndLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 278px;
 
  @media only screen and (max-width: 600px) {
    top:263px;
  }
`;
