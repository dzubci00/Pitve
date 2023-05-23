import React from "react";

import { HeroWrap, WrapImage} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const ImageContainer = ({photo}) => {
  return (
    <HeroWrap>
      <WrapImage>
        {" "}
        <Image
          src={photo}
          alt="destination photo"
          layout="fill"
          objectFit="cover"
        />
      </WrapImage>
    </HeroWrap>
  );
};

export default ImageContainer;
