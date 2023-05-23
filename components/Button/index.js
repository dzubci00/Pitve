import { ButtonWrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";

const Button = ({ text, version, width, contact }) => {
  return <ButtonWrap version={version} contact={contact} width={width}>{text}</ButtonWrap>;
};

export default Button;
