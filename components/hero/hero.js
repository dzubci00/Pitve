import React, { useLayoutEffect, useRef, useState, useEffect } from "react";

import {
  HeroWrap,
  Title,
  SubTitle,
  WrapText,
  Overlay,
  WrapImage,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useWindowSize from "../useWindowSize.js";

import { useInView } from "react-intersection-observer";
import Navbar from "../Navigation/navbar.js";
/* import heroBg from "../../images/hero/HeroBg2.png"; */
import heroBg from "../../images/hero/hero_1.png";
import heroBg2 from "../../images/hero/hero.png";
import heroBg3 from "../../images/hero/hero2.png";
import Button from "../Button/index.js";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1.05);

  useLayoutEffect(() => {
    const botPos = (element) => element.getBoundingClientRect().bottom;
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(1);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(1.1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <HeroWrap ref={ref} id="home">
      <Overlay />
      <WrapImage
        ref={elemRef}
        style={{
          transition: "transform 3000ms ease-out",
          transform: `scale(${scale})`,
        }}
      > 
      {/* {size.width>1200?<Image src={heroBg} alt="Logo" objectFit="cover" layout="fill" placeholder="blur" />:<Image src={heroBg2} alt="Logo" objectFit="cover" layout="fill" placeholder="blur" />}  */}
        <Image src={heroBg} alt="Logo"  layout="fill" placeholder="blur" objectFit="cover" />
      </WrapImage>
      <Navbar/>
      <WrapText style={{ textAlign: 'center' }}>
  <Title>Dvor Pitve</Title>
  <SubTitle>
    Escape to the beautiful Croatian island of Hvar and experience the
    luxury in hundreds-year-old stone houses in the picturesque town
    Pitve.
  </SubTitle>
  <a href="https://dvorpitve.book.rentl.io" target="_blank">
    <Button text="BOOK NOW" />
  </a>
</WrapText>

    </HeroWrap>
  );
};

export default Hero;
