import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapObjekt = styled.div`
  position: relative;
  height: auto;
  /* width: 36.6rem; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin:0 15px;

  ul {
    padding-left: 2rem;
    padding-right: 6rem;
    margin-right:10px;
    margin-left:10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.07px;
    
    color: #a55c3d;
    

    @media only screen and (max-width: 1200px) {
      padding-right:0;
      
    }

    @media only screen and (max-width: 700px) {
      width:80%;
      margin:0 auto;
      display:flex;
      list-style-position:inside;
      flex-direction:column;
      align-items:center;
      padding:0;  
    }
  }

  li{
    
    @media only screen and (max-width: 450px) {
      text-align:center;
     font-size:12px;
    }
  }
  h3{
    margin-top:2rem;
    padding-left:10px;
  }

   @media only screen and (max-width: 1200px) {
    margin:0 5px;
    
  }
  @media only screen and (max-width: 1050px) {
    /* max-width:200px; */
  }

  @media only screen and (max-width: 700px) {
    width:100%;
    
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapImage = styled.div`
  position: relative;
  height: 37.4rem;
  width: 100%;
  background-color: grey;

  @media only screen and (max-width:700px) {
    margin-top:40px;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Title = styled.h3`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 3rem;

  color: #303145;
  margin: 4.5rem 0 1.5rem 0;
  @media only screen and (max-width: 700px) {
    text-align:center;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Text = styled.p`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20.76px;
  color: #303145;
  padding-left:10px;
  padding-right:10px;
  /* height: 20.5rem; */
  height: auto;
  @media only screen and (max-width: 900px) {
    height: auto;
  }
  @media only screen and (max-width: 700px) {
    text-align:center;
  }
  @media only screen and (max-width: 400px) {
    font-size: 13px;
    line-height: 18px;
  }
 
`;
export const Button = styled.div`
  width: 14.5rem;
  height: 4.4rem;
  border: .1rem solid #a55c3d;
  border-radius: .6rem;
  font-family: "Cartograph CF";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  background-color: #ffffff;
  
  text-align: center;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a55c3d;
  margin-bottom: 3rem;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const ButtonBack = styled.div`
  position: absolute;
  width: 14.5rem;
  height: 4.4rem;
  border: .1rem solid #a55c3d;
  border-radius: .6rem;

  background-color: #ffffff;

  z-index: -1;
  top: .3rem;
  left: .3rem;
  cursor: pointer;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapButton = styled.div`
  position: relative;
  width:150px;
  padding-right:10px;
  padding-left:10px;
  
  a{
    text-decoration:none; 
  }

  @media only screen and (max-width: 800px) {
    width:100px;
  }
  @media only screen and (max-width: 700px) {
    align-self: center;
    padding:0;
  }



`;

export const Line = styled.div`
  height: .1rem;
  width: 200px;
  background-color: #a55c3d;
  margin-top:14px;
  margin-right:10px;
  margin-left:10px;

  @media only screen and (max-width: 700px) {
    width:360px;
    align-self: center;
    margin-top:25px;
    margin-bottom:15px;
  }
  @media only screen and (max-width: 450px) {
    width:303px;
  }
 
`;

export const WrapGalleryLink = styled.div`
  position: absolute;
  height: 53px;
  width: 100%;
  cursor: pointer;
  font-family: "Cartograph CF";
  font-style: normal;
  font-weight: 400;
  bottom: 0;
  padding-right:10px;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  background: rgba(217, 217, 217, 0.22);
  font-size: 15px;
  transition: all 0.2s ease-in-out;
 

  :hover{
    background: rgba(217, 217, 217, 0.9);
    
    transition: all 0.2s ease;
  }

:hover span{
  color: #A55C3D;
  /* margin-left:-50%; */
  transform:translateX(-55%);
  transition: all 0.2s ease-in-out;
}



  
  @media only screen and (max-width: 800px) {
    justify-content: center;
    font-size:12px;
  }
  @media only screen and (max-width: 700px) {
    font-size:15px;
  }

`;

export const WrapLeftRight = styled.div`
  display: flex;
  width:100%;
  @media only screen and (max-width: 700px) {
    flex-direction:column;
    margin:0rem auto;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapRight = styled.div`
  display: flex;
  flex-direction: column;
  width:50%;
  margin:4rem 4rem 4rem  2rem;
  @media only screen and (max-width: 700px) {
    width:90%;
    margin:0rem auto 4rem auto;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const WrapLeft = styled.div`
  display: flex;
  flex-direction: column;
  width:50%;
  margin:4rem 2rem 4rem 4rem;
  h3{
    margin-top:0;
  }
  @media only screen and (max-width: 700px) {
    width:90%;
    margin:4rem auto 2rem auto;
  }
  @media only screen and (max-width: 450px) {
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

export const HeroWrap2 = styled.div`
  position: relative;
  z-index: 11;
  height: auto;
  width: 90%;
  display: flex;
  justify-content: center;
  margin:0 auto;
  
ul{
  padding:0;
  margin:0;
}

  .slick-list {
    height:80vh;
    @media only screen and (max-width: 600px) {
      height: 50vh;
    }
  }


  }

 
  .slick-dots {
    display:flex  !important;
    justify-content: center;
    align-items: center;
    bottom:15px;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    left: 0;
    right: 0;
    width:520px;
    margin:0 auto;
    height:25px;
  
    li{
      margin:0;
    }
    
    @media only screen and (max-width: 600px) {
    
    }

  }
  .slick-dots li button:before {
    color: #9f9f9fb8;
    font-size:12px;
    opacity:1;
    top:3px;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
  }
  .slick-dots li.slick-active button:before {
    color:rgb(255, 255, 255) !important;
    opacity:1;
}
  .wrapLoaderNext {
    position: absolute;
    z-index: 20;
    top: 45%;
    right: 5%;
    cursor: pointer;
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
    top: 45%;
    left: 5%;
    cursor: pointer;

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
    opacity: 0.7;
  }
  .photoSlider {
    width: 100% !important ;
    height:80vh !important ;
    @media only screen and (max-width: 600px) {
      height: 50vh  !important;
    }
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
`;

