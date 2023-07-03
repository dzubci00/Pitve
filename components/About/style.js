import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const AboutWrap = styled.div`
  position: relative;
  width: 100%;
  height:auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 21rem;
  overflow: hidden;
  z-index: 0;
  padding: 5rem 0 0 0;
  padding-bottom:4rem;
  h1{
    margin-top:0;
  }
   @media only screen and (max-width: 1500px) {
   padding-bottom:0rem;
   
  }
  @media only screen and (max-width: 1100px) {
    padding-bottom:2rem;
  } 
  @media only screen and (max-width: 800px) {
   display:flex;
   flex-direction: column;
   align-items: center;
   padding-bottom:0rem;
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
  @media only screen and (max-width: 1900px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const WrapText = styled.div`
  position: relative;
  height: auto;
 /*  width: 46.1em; */
  width:50%;
 /*  min-width: 45em; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 0;
  margin-left: 27.6em;
  margin-right:1rem;

  @media only screen and (max-width: 1700px) {
    margin-left: 15rem;
  }
   @media only screen and (max-width: 1100px) {
    margin-left: 7rem;
  }
  @media only screen and (max-width: 800px) {
    width: 90%;
    margin:0 auto;
  }
`;
export const WrapImages = styled.div`
  position: relative;
  height: 115.6rem;
  width:50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 0;
  margin-bottom:0rem;

  @media only screen and (max-width: 1500px) {
    height:107.6rem
  }
 @media only screen and (max-width: 900px) {
  height: 120.6rem;
}
@media only screen and (max-width: 800px) {
  width:0;
  height: 75.6rem;
}
@media only screen and (max-width: 500px) {
  height: 66.6rem;
}
`;
export const WrapSocial = styled.div`
  position: absolute;
  bottom: -9rem;
  left: -1rem;
  z-index: 30;
  width: 34rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
  color: black;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;

  @media only screen and (max-width: 1500px) {
    bottom: -9rem;
    left: -1rem;
  }
`;
export const WrapIcon = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 1200px) {
    margin-right: 5rem;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  height: 83.5rem;
  width: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-180deg);
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Image1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: 13rem;
  height: 40rem;
  width: 36.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: grey;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1500px) {
    height: 34.6rem;
    width: 31.7rem;
    top: 5rem;
    left: 14rem;
}
@media only screen and (max-width: 1500px) {
  top: 5rem;
  left: 9rem;
}
 }
 @media only screen and (max-width: 900px) {
  height: 31.6rem;
    width: 28.7rem;
    top: 5rem;
    left: 11rem;
   
}
@media only screen and (max-width: 800px) {
  left:-50rem;
  top:17em;
  width:40.7rem;
  height:40rem;
  
}
@media only screen and (max-width: 500px) {
  width: 28.5rem;
  height: 32.6rem;
  left:-33rem;
  }

  @media only screen and (max-width: 400px) {
    left:-30rem;
  }
`;
export const Image2 = styled.div`
  position: absolute;
  z-index: 2;
  top: 23rem;
  right: -10rem;
  height: 47.7rem;
  width: 39rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: lightgray;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1800px) {
    top: 23rem;
    right: 0rem;
    height: 47.7rem;
    width: 39rem;
  }
  @media only screen and (max-width: 1500px) {
    height: 41.2rem;
    width: 33.7rem;
    top: 21rem;
    right: -6rem;
  
 }
 @media only screen and (max-width: 1100px) {
    right:-11rem;
    top:21rem;

} 
@media only screen and (max-width: 900px) {
  left:21rem;
  top:25rem;
  width:29.9rem;
  height:37rem;
  
}
@media only screen and (max-width: 800px) {
 left:-17rem;
 top:36rem;
 width:32.9rem;
 height:40rem;

}
@media only screen and (max-width: 500px) {
  width: 25.5rem;
  height: 31.6rem;
  left: -13rem;
}
`;
export const Image4 = styled.div`
  position: absolute;
  z-index: 4;

  top: 75rem;
  right: -6rem;
  height: 45.4rem;
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: lightgray;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1700px) {
    top: 75rem;
    right: -2rem;
   
 }
  @media only screen and (max-width: 1500px) {
    left: 38rem;
    top: 69rem;
    height: 39.2rem;
    width: 29.4rem;
   
 }
 @media only screen and (max-width: 1100px) {
  left: 31rem;
  top: 69rem;

}
 @media only screen and (max-width: 900px) {
  left: 24rem;
  top: 69rem;
  width:31rem;
  height:42.4rem;

}
 @media only screen and (max-width: 800px) {
  left: 17rem;
  top: 16rem;
  width:34rem;
  height:45.4rem;
}
@media only screen and (max-width: 600px) {
  left: 10rem;
  top: 16rem;
}
@media only screen and (max-width: 500px) {
  left: 12rem;
  top:18rem;
  width: 20.9rem;
  height: 26.9rem;
}
  @media only screen and (max-width: 400px) {
    left: 6rem;
  }
`;
export const Image3 = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 13.6rem;
  left: 3rem;
  height: 53.5rem;
  width: 43.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #cacaca;
  img {
    object-fit: cover;
  }

  @media only screen and (max-width: 1500px) {
    height: 46.3rem;
    width: 37.3rem;
    bottom: 22.6rem;
    left: 3rem;
   }
   @media only screen and (max-width: 1100px) {
    bottom: 22.6rem;
    left: 0rem;
   }
   @media only screen and (max-width: 900px) {
    height: 43.3rem;
    width: 34.3rem;
    bottom: 28.6rem;
    left: 3rem;
   }
  @media only screen and (max-width: 800px) {
    display:none
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Title = styled.h1`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 5.5rem;
  color: #303145;
  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Text = styled.p`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 2.1rem;

  color: #303145;
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
 
`;
export const Links = styled.div`
  position: relative;
  width:50rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: black;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: .1rem;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media only screen and (max-width: 1300px) {
    display:flex;
    justify-content:flex-start;
  }
  @media only screen and (max-width: 500px) {
    display:none;
  }
`;
export const Link = styled.a`
  position: relative;
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.1rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #303145;
  height: 100%;
  cursor: pointer;
  a{
    text-decoration:none;
    color:black;
  }
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: black;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: .1rem;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Line = styled.div`
  position: absolute;
  width: 25.5rem;
  height: .3rem;
  background: #e37958;
  top: 2.8rem;
  transition: all 2s ease-out;

  left: ${(props) => (props.inView ? ` -27.6rem;` : `-57.6rem;`)};
  @media only screen and (max-width: 1600px) {
    
  }
  @media only screen and (max-width: 800px) {
    display:none;
  }
`;

export const Vertical = styled.div`
  position: relative;
  width: .1rem;
  height: 1.2rem;
  background-color: #303145;
  bottom: .1rem;

  @media only screen and (max-width: 1300px) {
    margin:0 1em;
  }
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const SocialText=styled.div`
  margin-left: 10px;
  width:17em;

  a{
    text-decoration:none;
    color: black; 
  }

  a:hover {
    position: relative;
    font-weight:bold;
    margin-left:10px;
    transition:all 0.3s ease-in-out;
  }

  a:not(:hover){
    margin-left:0;
    font-weight:normal;
    transition:all 0.3s ease-in-out;
  }


  
`
