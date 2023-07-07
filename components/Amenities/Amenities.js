import {
  HeroWrap,
  Title,
  WrapImage,
  Grid,
  SubTitle,
  Text,
} from "./style.js";

import { useScrollPercentage } from "react-scroll-percentage";
import Image from "next/image";
import Bg from "../../images/amenities/bg2.svg";


const Amenities = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  return (
    <HeroWrap id="amenities" ref={ref}>
      <WrapImage>
        <Image style={{transform: `translateY(-${percentage * 160}px`}} src={Bg} alt="bg" layout="fill" objectFit="cover"/>       
      </WrapImage>
      <Title>Villa Ameneties</Title>
      <Grid>
        <div className="div1">
          <SubTitle>Parking</SubTitle>
          <Text>
            <ul>
              <li>Available and free</li>
            </ul>
          </Text>
        </div>
        <div className="div2">
          <SubTitle>Kitchen</SubTitle>
          <Text>
            <ul>
              <li>Coffee machine</li>
              <li>Toaster </li>
              <li>Stovetop</li>
              <li>Oven</li>
              <li>Kitchenware</li>
              <li>Electric kettle</li>
              <li>Dishwasher</li>
              <li>Microwave</li>
            </ul>
          </Text>
        </div>
        <div className="div3">
          <SubTitle>Outdoors</SubTitle>
          <Text>
            <ul>
              <li>Outdoor furniture</li>
              <li>Balcony</li>
              <li>Terrace</li>
              <li>Garden</li>
              <li>Mountain view</li>
              <li>Sea view</li>
              <li>Pool (Villa A, Villa B)</li>
              <li>BBQ facilities (Villa A)</li>
            </ul>
          </Text>
        </div>
        <div className="div4">
          <SubTitle>Linen and towels</SubTitle>
          <Text>
            <ul>
              <li>Included</li>
            </ul>
          </Text>
        </div>
        <div className="div5">
          <SubTitle>Cleaning service</SubTitle>
          <Text>
            <ul>
              <li>Daily housekeeping</li>
            </ul>
          </Text>
        </div>
        <div className="div6">
          <SubTitle>Internet and media</SubTitle>
          <Text>
            <ul>
              <li>Starlink internet</li>
              <li>Internet available in all rooms</li>
              <li> Flat-screen smart TVs</li>
            </ul>
          </Text>
        </div>
      </Grid>
    </HeroWrap>
  );
};

export default Amenities;
