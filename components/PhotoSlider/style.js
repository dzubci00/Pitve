import styled from "styled-components";

export const HeroWrap = styled.div`
  position: relative;
  z-index: 11;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  .slick-list {
    height: 85vh;
    @media only screen and (max-width: 600px) {
      height: 55vh;
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
    width:420px;
    margin:0 auto;
    height:25px;
  
    li{
      margin:0;
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
    border: 2px solid #f3f3f349;
    border-radius: 50%;
    border-top: 2px solid #ffffffb4;

    width: 60px;
    height: 60px;
    -webkit-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite;

    @media only screen and (max-width: 600px) {
      width: 50px;
      height: 50px;
    }
  }
  .wrapLoaderPrev {
    position: absolute;
    z-index: 20;
    top: 45%;
    left: 4%;
    cursor: pointer;

  }
  .loaderPrev {
    border: 2px solid #f3f3f349;
    border-radius: 50%;
    border-top: 2px solid #ffffffb4;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 6s linear infinite;
    animation: spin 6s linear infinite;

    @media only screen and (max-width: 600px) {
      width: 50px;
      height: 50px;
    }
  }
  .arrow {
    position: absolute;
    top: 19px;
    left: 19px;
    opacity: 0.7;

    @media only screen and (max-width: 600px) {
      top: 12px;
      left: 12px;
    }
  }
  .photoSlider {
    width: 100% !important ;
    height:85vh !important ;
    @media only screen and (max-width: 600px) {
      height: 45vh  !important;
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
export const WrapPhoto = styled.div`
  position: relative;
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 56%;

  @media only screen and (max-width: 600px) {
    height: 45vh;
  }
`;
