import {
  Wrap,
  WrapBg,
  Overlay,
  Title,
  Data,
  Tel,
  Email,
  Adress,
  Name,
  Num,
  Buttons,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Up from "../../images/contact/bg.png";
import { useScrollPercentage } from "react-scroll-percentage";
import { useInView } from "react-intersection-observer";
import Button from "../Button/index.js";

const Contact = () => {
 /*  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  }); */
  
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    <Wrap id="contact" ref={ref}> 
      <Overlay />
      <WrapBg>
        <Image style={{transform: `translateY(-${percentage * 320}px`}} src={Up} alt="slider image" layout="fill" objectFit="cover" />
      </WrapBg>
      <Title>Contact us</Title>
      <Data>
        <Email>
          <Name>EMAIL</Name>
          <Num><a href="mailto:dvorpitve@gmail.com" target="_blank">dvorpitve@gmail.com</a></Num>
        </Email>

        <Tel>
          <Name>TELEPHONE</Name>
          <Num><a href="tel:+385 98 965 6320" target="_blank">+385 98 965 6320</a></Num>
        </Tel>

        <Adress>
          <Name>ADDRESS</Name>
          <Num><a href="https://www.google.com/maps/place/43%C2%B008'59.2%22N+16%C2%B040'05.9%22E/@43.1497778,16.6683056,628m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d43.1497778!4d16.6683056" target="_blank">
            Pitve 20
            <br /> 21465 Jelsa <br /> Croatia
            </a>
          </Num>
        </Adress>
      </Data>
      <Buttons>
        <a href="https://dvorpitve.book.rentl.io" target="_blank">
          <Button text="BOOK YOUR STAY" width="auto"/>
        </a>
        <a href="https://www.google.com/maps/place/43%C2%B008'59.2%22N+16%C2%B040'05.9%22E/@43.1497778,16.6683056,628m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d43.1497778!4d16.6683056" target="_blank">
          <Button text="OPEN IN GOOGLE MAPS" width="auto"/>
        </a>
      </Buttons>
    </Wrap>
  );
};

export default Contact;
