import styled from "styled-components";

export const Wrap = styled.div`
 
position: relative;
  width: 100%;
  height: auto;

  @media only screen and (min-width: 1600px) {
    height:70vh;
   }

  @media only screen and (max-width: 900px) {
   height:60vh;
  }
  @media only screen and (max-width: 450px) {
    height:50vh; 
  }

  video{
    object-fit:cover;
  }

`;
