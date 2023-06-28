import {
  HeroWrap,
  SingleLink,
  WrapImage,
  LinkWrap,
  Divider,
  WrapBg,
  Bottom,
  Upper,
  Mid,
  WrapImageDown,
  BookNow,
  WrapImageAndLinks,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Link from "next/link";

import Image from "next/image";

import { Links } from "../Navigation/links.js";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Lottie from "lottie-react";
import madeBySutra from "./madeBySutra";
import Up from "../../images/footer/bg.png";
import Down from "../../images/footer/down.png";

import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 92],
      },
    ],
  };
  return (
    <HeroWrap ref={ref}>
      <WrapBg>
        <Image
          src={Up}
          alt="footer image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </WrapBg>
      <WrapImageDown inView={inView}>
        <Image
          src={Down}
          alt="footer image 2"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </WrapImageDown>
      <WrapImageAndLinks>
        <WrapImage>
          <Image src="/pitveLogo.svg" alt="Logo" layout="fill" />
        </WrapImage>
        <LinkWrap>
          {Links.map((e, index) => (
            <SingleLink key={index}>
              <AnchorLink href={e.anchor} className="hover-underline-animation">
                {e.veza}
              </AnchorLink>
            </SingleLink>
          ))}

          <SingleLink>
            <BookNow href="https://dvorpitve.book.rentl.io" target="_blank" className="hover-underline-animation">
            BOOK NOW
            </BookNow>
            </SingleLink>
        </LinkWrap>
      </WrapImageAndLinks>
      <Bottom>
        <Upper>
          <div>Dvor Pitve d.o.o., Pitve 20, 21465 Jelsa</div>
          <Mid>Registarski sud: Trgovački sud u Splitu</Mid>
          <div>IBAN: HR3823400091111175285</div>
        </Upper>
            <div>Design by <a href="https://sutra.hr/" target="_blank"><b>SUTRA.HR</b></a></div>
      </Bottom>
    </HeroWrap>
  );
};

export default Footer;