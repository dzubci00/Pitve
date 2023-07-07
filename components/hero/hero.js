import React, { useRef, useState, useEffect } from "react";

import {
  HeroWrap,
  Title,
  SubTitle,
  WrapText,
  Overlay,
  WrapImage,
} from "./style.js";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navigation/navbar.js";
import heroBg from "../../images/hero/hero_1.png";

import Button from "../Button/index.js";

const Hero = () => {
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1.05);

  useEffect(() => {
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
  <a href="https://dvorpitve.book.rentl.io" target="_blank" rel="noopener noreferrer">
    <Button text="BOOK NOW" />
  </a>
</WrapText>

    </HeroWrap>
  );
};

export default Hero;
