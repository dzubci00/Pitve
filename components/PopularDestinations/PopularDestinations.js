import React from "react";

import {
  HeroWrap,
  Container,
  Title,
  WrapBg,
  DistancesLocationsWrap,
  WrapList,
  Left,
  WrapImageDivider,
  Right,
  Image1,
} from "./style.js";
import Image from "next/image";
import Destination from "./Destination/Destination.js";
import { destinationsList } from "./list.js";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Bg from "../../images/ourHome/paper.png";
import photoBottom from "../../images/ImageDivider.png";
import { useScrollPercentage } from "react-scroll-percentage";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="wrapLoaderNext" onClick={onClick}>
      <div className="arrow">
        <IoIosArrowForward size={25} />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="wrapLoaderPrev" onClick={onClick}>
      <div className="arrow">
        <IoIosArrowBack size={25} />
      </div>
    </div>
  );
}

const PopularDestinations = () => {
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
          dots: false,
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
  const [ref2, percentage2] = useScrollPercentage({
    threshold: 0,
  });


  return (
    <HeroWrap ref={ref2}>
       <WrapBg>
        <Image style={{transform: `translateY(-${percentage2 * 120}px`}} src={Bg} alt="background" layout="fill" objectFit="cover" />
      </WrapBg> 
       <DistancesLocationsWrap>
        <Title>Distances & Locations</Title>
        <WrapList>
          <Left>
            <ul>
              <li>Nearest beach - 3 km</li>
              <li>Nearest supermarket - 1,8 km</li>
              <li> Nearest ferry - 13 km (Stari Grad)</li>
              <li>Nearest restaurant - 50 m (Dvor Duboković)</li>
              <li>Nearest bar - 2,5 km (Jelsa)</li>
            </ul>
          </Left>
          <Right>
            <ul>
              <li>Nearest town - 2 km</li>
              <li>Nearest pharmacy - 2,5 km</li>
              <li>Nearest hospital - 3 km</li>
              <li> Nearest cinema - 2,3km</li>
            </ul>
          </Right>
        </WrapList>
      </DistancesLocationsWrap> 
      <Title>Popular destinations on the island</Title>
      <Container>
        <Slider {...settings}>
          {destinationsList.map((dest) => (
            <Destination
              key={dest.title}
              photo={dest.photo}
              title={dest.title}
              link={dest.link}
              text={dest.text}
            />
          ))}
        </Slider>
      </Container>
      <WrapImageDivider ref={ref} >
        <Image1 
          style={{transform: `translateY(-${percentage * 320}px`}}
          >
          {" "}
          <Image  src={photoBottom} alt="house" layout="fill" objectFit="cover" />
        </Image1>    
      </WrapImageDivider>
    </HeroWrap>
  );
};

export default PopularDestinations;
