import styled from "styled-components";


export const WrapAll = styled.div`
position: relative;
width: 100%;
height: 800px;
overflow:hidden;

@media only screen and (max-width: 1450px) {
  height: 780px;
}
@media only screen and (max-width: 1300px) {
  height: 760px;
}
@media only screen and (max-width: 1100px) {
  height: 740px;
}
@media only screen and (max-width: 1000px) {
  height: 720px;
}
@media only screen and (max-width: 900px) {
  height: 700px;
}
@media only screen and (max-width: 750px) {
  height: 680px;
}
@media only screen and (max-width: 600px) {
  height: 660px;
}
@media only screen and (max-width: 450px) {
  height: 640px;
}



`;
export const PlaninaWrap = styled.div`
position: relative;
width: 100%;
height:1193px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 142.5%;
text-align: center;
@media only screen and (max-width: 1800px) {
  /* height: 1117px; */
}
@media only screen and (max-width: 450px) {
}
`;

export const WrapPlaninaUp = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 980px;

z-index: 1;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 142.5%;
text-align: center;
@media only screen and (max-width: 900px) {
  height: 1100px;
}
@media only screen and (max-width: 1100px) {
 /*  height:1400px; */
}
`;
export const WrapPlaninaDown = styled.div`
position: absolute;
/* bottom: 254px; */
bottom:0;
width: 100%;
height: 100%;
z-index: 3;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 142.5%;
text-align: center;
@media only screen and (max-width: 1050px) {
}
@media only screen and (max-width: 450px) {
}
`;
export const WrapText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 111.7px;
  z-index: 2;
 /*  padding:0 100px; */
  top: 196px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 142.5%;
  transition: all 0.2s ease-out;
  text-align: center;
  
`;

export const Title = styled.h2`
  position: relative;
  font-family: "Civane-NorMed";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  text-align: center;
  color: #303145;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 35px;
  }
  @media only screen and (max-width: 450px) {
   /*  margin-bottom: 20px; */
  }
`;
export const WrapCol = styled.div`
  position: relative;
  font-style: normal;
  max-width:1200px;
  font-weight: 700;
  font-size: 15px;;
  line-height: 142.5%;
  text-align: center;
  display: flex;
  margin:0 10px;
  a {
    text-decoration: none;
    color: #303145;
    font-weight: 700;
    cursor: pointer;
  }
  @media only screen and (max-width: 1300px) {
    max-width:1000px;
  }
  @media only screen and (max-width: 1100px) {
    max-width:850px;
  }
  @media only screen and (max-width: 900px) {
    justify-content:center;
    max-width:600px;
  }
  @media only screen and (max-width: 600px) {
    max-width:400px;
  }
  @media only screen and (max-width: 450px) {
    max-width:290px;
  }
`;
export const Col = styled.div`
  font-family: "Civane-NorLig";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: left;
  color: #303145;
  width:400px;
  margin: 0 30px;
  ul{
    padding:0;
    margin:0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 18px;
    margin: 0 15px;
  }
 
  
`;