import { useRef, useState, useEffect } from "react";

import {
  Title,
  OurHomeWrap,
  WrapBg,
  WrapOtok,
  Left,
  Right,
  Bottom,
  SubTitle,
  WrapText,
  Text,
  TextRight,
  WrapImg1,
  WrapImg2,
  WrapImg3,
  WrapImg4,
  WrapImg5,
  WrapImg6,
  WrapImg7,
  WrapImg8,
  WrapImg9,
  Wrap2Images,
  WrapLeftText,
  WrapRightText,
  WrapTextImage,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";

import { useInView } from "react-intersection-observer";
import useWindowSize from "../useWindowSize.js";
// import Lottie, { useLottie } from "lottie-react";
// import LottiePlayer from "@lottiefiles/lottie-player";
// import { create } from "@lottiefiles/lottie-interactivity";
import animacijaJson from "./animacija.json";
import Lottie, { useLottie } from "lottie-react";
import Bg from "../../images/ourHome/paper.png";
import Otok from "../../images/ourHome/otok.png";
import Img1 from "../../images/ourHome/img1.png";
import Img2 from "../../images/ourHome/img2.png";
import Img3 from "../../images/ourHome/img3.png";
import Img4 from "../../images/ourHome/img4.png";
import Img5 from "../../images/ourHome/img5.png";
import Img6 from "../../images/ourHome/img6.png";
import Img7 from "../../images/ourHome/img7.png";
import Img8 from "../../images/ourHome/img8.jpg";
import Img9 from "../../images/ourHome/img9.jpg";
import Image from "next/image.js";

const style = {
  height: 280,
};


const Example = () => {
  const options = {
    animationData: animacijaJson,
    loop: false,
    autoplay: true,
    initialSegment: [0, 104],
  };

  const { View } = useLottie(options, style);
  
  return View;
};

const OurHome = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const size=useWindowSize();

  let slika1=Img2;
  let slika2=Img1;

  if (size.width<=600){
    slika1=Img1;
    slika2=Img2;
  }
  
  return (
    <OurHomeWrap id="aboutPitve" ref={ref}>
      <WrapOtok>
        <Image src={Otok} alt="island" layout="fill" />
      </WrapOtok>
      <WrapBg>
        <Image src={Bg} alt="background" layout="fill" objectFit="cover" />
      </WrapBg>{" "}
      <div style={{ marginTop: "10rem" }}>{inView && <Example />}</div>
      <Title>Our home are Pitve</Title>
      <WrapText>
        <Left>
          <Wrap2Images>
          {size.width<=600?(<WrapImg4>
          <Image src={Img4} alt="img4" layout="fill" placeholder="blur" objectFit="cover"/>
        </WrapImg4>):("")}
          <WrapImg1>
            <Image src={slika2} alt="island" layout="fill" placeholder="blur" objectFit="cover"/>
          </WrapImg1>
          </Wrap2Images>
          <WrapLeftText>
            <SubTitle>Fun fact - Lavanderman</SubTitle>
            <Text>
              Pitve is home of lavender plants and also Lavenderman. Lavenderman
              is one of the most recognizable superheroes in Croatia. He derived
              his powers from the common, sweet-smelling plant lavender, which
              gave him the ability to fight against mosquitoes, moths,
              headaches, insomnia, dizziness, liver and spleen diseases and
              various other ailments. Lavanderman became powerful when, at the
              age of 34, fell into a cauldron for processing lavender in the
              town of Pitve. Since then he does not age and has special
              abilities. Truth or myth? Nobody can tell, but if you want to stop
              the time and aging (or just feel like that), Pitve is the perfect
              place.
            </Text>
          </WrapLeftText>
        </Left>
        <Right>
          <WrapImg2>
            <Image src={slika1} alt="img2" layout="fill" placeholder="blur" objectFit="cover"/>
          </WrapImg2>
          <WrapRightText>
            <SubTitle>History of Pitve</SubTitle>
            <WrapTextImage>
              <TextRight>
                Pitve is a village located on the island of Hvar in Croatia,
                often called “small Tuscany”. It is situated in the central part
                of the island on the road which connects the North and South
                sides of the island. That makes Pitve as an optimal starting
                point for visiting beaches on both the south and north sides of
                the island.
                <br />
                <br /> Pitve is one of the oldest settlements on Hvar. From this
                small village in the 15th century arose Jelsa, which is today
                the economic and touristic center of island Hvar. Today Pitve is
                a small, calm and peaceful village with a population of around
                50 people. It is known for its picturesque setting, with stone
                houses and narrow streets nestled among olive groves and
                vineyards. In Pitve everything is slower, calmer and simple.The
                whole village is filled with the good spirit of the past which
                will make you feel as if the time has stopped centuries ago.
              </TextRight>
              {size.width>1500? (<WrapImg3>
                <Image src={Img3} alt="img3" layout="fill" placeholder="blur" objectFit="cover"/>
              </WrapImg3> ):""}
            </WrapTextImage>
          </WrapRightText>
        </Right>
      </WrapText>
      <Bottom>
      {size.width<=600?(""):(<WrapImg4>
          <Image src={Img4} alt="img4" layout="fill" placeholder="blur" objectFit="contain"/>
        </WrapImg4>)}

        {size.width>600?(""):(<WrapImg9>
          <Image src={Img9} alt="img9" layout="fill" placeholder="blur" objectFit="contain"/>
        </WrapImg9>)}
        <WrapImg5>
          <Image src={Img5} alt="img5" layout="fill" placeholder="blur" objectFit="contain"/>
        </WrapImg5>

        {size.width>600?(""):(<WrapImg8>
          <Image src={Img8} alt="img8" layout="fill" placeholder="blur" objectFit="contain"/>
        </WrapImg8>)}

      

       

        {size.width<=600?(""):(<WrapImg6>
          <Image src={Img6} alt="img6" layout="fill" placeholder="blur" objectFit="contain"/>
        </WrapImg6>)}
        {size.width<=600?(""):(<WrapImg7>
          <Image src={Img7} alt="img7" layout="fill" placeholder="blur" objectFit="contain"/>
        </WrapImg7>)}
      </Bottom>
    </OurHomeWrap>
  );
};

export default OurHome;
