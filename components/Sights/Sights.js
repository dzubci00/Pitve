import {
  HeroWrap,
  Title,
  WrapText,
  Text,
  Button,
  WrapLeft,
  WrapRight,
  BoatTitleWrap,
  WrapValTitle,
  WrapImages,
  WrapImage,
  Caption,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

const Sights = () => {
  const options = {
    // Please note that "caption" is singular
    caption: {
      captionAlignment: "start",
      captionColor: "#FFFFFF",
      captionContainerPadding: "0",
      captionFontFamily: "inherit",
      captionFontSize: "inherit",
      captionFontStyle: "inherit",
      captionFontWeight: "inherit",
      captionTextTransform: "inherit",
      showCaption: true,
    },
  };
  return (
    <SimpleReactLightbox>
      <HeroWrap></HeroWrap>
    </SimpleReactLightbox>
  );
};

export default Sights;
