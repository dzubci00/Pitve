import React, { useState } from "react";

import { HeroWrap, WrapImage, Title, Text, Line } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const Beach = ({ photo, title, text }) => {
  return (
    <HeroWrap>
      <WrapImage>
        {" "}
        <Image src={photo} alt="beach photo" layout="fill" objectFit="cover" />
      </WrapImage>
      <Line />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </HeroWrap>
  );
};

export default Beach;
