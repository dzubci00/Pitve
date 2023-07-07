import React from "react";

import { HeroWrap, Container, Title, WrapBg, } from "./style.js";
import Image from "next/image";
import Bg from "../../images/ourHome/paper.png";
import Destination from "./Beach/Beach.js";
import { beachesList } from "./list.js";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useScrollPercentage } from "react-scroll-percentage";

function NextArrow(props) {
  const {onClick } = props;
  return (
    <div className="wrapLoaderNext" onClick={onClick}>
      <div className="arrow">
        <IoIosArrowForward size={25} />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const {onClick } = props;
  return (
    <div className="wrapLoaderPrev" onClick={onClick}>
      <div className="arrow">
        <IoIosArrowBack size={25} />
      </div>
    </div>
  );
}

const PopulareBeaches = () => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesPerRow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          infinite: true,
          slidesToShow: 1,
          slidesPerRow: 1
        }
      }
    ]
  };

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    <HeroWrap id="popularBeaches" ref={ref}>
      <WrapBg>
        <Image style={{transform: `translateY(-${percentage * 120}px`}} src={Bg} alt="background" layout="fill" objectFit="cover" />
      </WrapBg> 
      <Title>Popular beaches</Title>

      <Container>
        <Slider {...settings}>
          {beachesList.map((lovre) => (
            <Destination
              key={lovre.title}
              photo={lovre.photo}
              title={lovre.title}
              text={lovre.text}
            />
          ))}
        </Slider>
      </Container>
    </HeroWrap>
  );
};

export default PopulareBeaches;
