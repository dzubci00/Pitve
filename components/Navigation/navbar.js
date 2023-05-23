import React, { useState, useRef, useEffect } from "react";
// import Logo from "../../../content/assets/LogoNavbar.svg";
import Link from "next/link";

import {
  NavbarWrap,
  LogoWrap,
  LinkWrap,
  SingleLink,
  Hamburger,
  Line,
  BookNow,
} from "./styles.js";
import { Links } from "./links";
import MobileMenu from "../MobileMenu";
import { useInView } from "react-intersection-observer";
import { Anchor } from "nextjs-anchor";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/router";
import { en, hr } from "../../translations/translations.js";
import Image from "next/image";
import Button from "../Button/index.js";
const Navbar = () => {
  const refOne=useRef(null);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "hr" ? hr : "";
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <NavbarWrap ref={ref}>
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />

      <Hamburger  onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <LogoWrap isOpen={isOpen} inView={inView}>
        <Image
          src="/logo.svg"
          alt="logo"
          layout="fixed"
          width={45}
          height={45}
        />
      </LogoWrap>
      <LinkWrap>
        {Links.map((e, index) => (
          <SingleLink onClick={() => setIsOpen(false)} key={index}>
            <AnchorLink href={e.anchor} className="hover-underline-animation">
              {e.veza}
            </AnchorLink>
          </SingleLink>
        ))}
        <SingleLink onClick={() => setIsOpen(false)}>
          <BookNow href="https://dvorpitve.book.rentl.io" target="_blank" className="hover-underline-animation">
          BOOK NOW
          </BookNow>
          </SingleLink>
      </LinkWrap>
    </NavbarWrap>
  );
};

export default Navbar;
