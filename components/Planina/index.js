import React, { useEffect, useState } from "react";
import {
  PlaninaWrap,
  WrapPlaninaUp,
  WrapPlaninaDown,
  WrapText,
  Title,
  WrapCol,
  Col,
  WrapAll,
} from "./style.js";

import { useScrollPercentage } from "react-scroll-percentage";
import Image from "next/image";
import Up from "../../images/Planine/planinaBgGori.png";
import Down from "../../images/Planine/planinaBgDoli.png";

const Planina = () => {
  const [ref2, percentage] = useScrollPercentage({
    threshold: 0,
  });
  const [windowWidth, setWindowWidth] = useState(null);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WrapAll>
    <PlaninaWrap ref={ref2}>
      <WrapPlaninaUp  >
        {" "}
        <Image src={Up} alt="slider image" layout="fill" objectFit="cover" />
      </WrapPlaninaUp>
      <WrapText  style={{transform: `translateY(-${percentage * 400}px`}}>
        <Title>Suggested activities</Title>
        <WrapCol>
          <Col>
            <ul>
              <li>
                <b>Hiking on the nearby mountains</b> - To the highest peak of
                the island of Hvar,
                <a href="https://goo.gl/maps/JiFtXMaiAnvEofVP6">
                  {" "}
                  Sv. Nikola{" "}
                </a>{" "}
                (626 meters)
              </li>
              <li>
                <b>Free climbing </b> // Pitve free climbing route and{" "}
                <a href="https://www.hvarclimbing.com">
                  numerous other nearby locations
                </a>{" "}
                with maintained climbing routes, e.g. Sv. Nedjelja
              </li>
              <li>
                <b>Cycling paths throughout the island </b> // Bike tour by{" "}
                <a href="https://hvar-adventure.com/hvar-cycling-tour-new/#">
                  Hvar Adventure
                </a>
              </li>
              {windowWidth>900?(
                ""
              ):(
                <React.Fragment>
                  <li>
                  Diving in Jelsa and Vrboska //
                  <a href="https://www.tripadvisor.com/Attraction_Review-g659962-d7745431-Reviews-Scuba_Diving_Black_Pearl-Jelsa_Hvar_Island_Split_Dalmatia_County_Dalmatia.html">
                    Black Pearl Diving Center
                  </a>{" "}
                </li>
                <li>
                  Fish trip or rent a boat{" "}
                  <a href="https://visitjelsa.hr/en/">in Jelsa</a>
                </li>
              </React.Fragment>
              )}
            </ul>
          </Col>
          
          {windowWidth>900?(
          <Col>
            <ul>
              <li>
                Diving in Jelsa and Vrboska //
                <a href="https://www.tripadvisor.com/Attraction_Review-g659962-d7745431-Reviews-Scuba_Diving_Black_Pearl-Jelsa_Hvar_Island_Split_Dalmatia_County_Dalmatia.html">
                  Black Pearl Diving Center
                </a>{" "}
              </li>
              <li>
                Fish trip or rent a boat{" "}
                <a href="https://visitjelsa.hr/en/">in Jelsa</a>
              </li>
              <li>
                <a href="https://goo.gl/maps/RsGo7pHFdpzcGsTY7">Medvid Bod</a>{" "}
                cave trip, snorkeling and swimming
              </li>
              <li>
                Wine tasting // Try the finest variety of island grapes, e.g.
                <a href="https://vina-tomic.com/en/">Tomić Winery</a>
              </li>
            </ul>
          </Col>
  
               ):("")}
          <Col>
            <ul>
              {windowWidth>900?(""):(
              <React.Fragment>
                <li>
                <a href="https://goo.gl/maps/RsGo7pHFdpzcGsTY7">Medvid Bod</a>{" "}
                cave trip, snorkeling and swimming
              </li>
              <li>
                Wine tasting // Try the finest variety of island grapes, e.g.
                <a href="https://vina-tomic.com/en/">Tomić Winery</a>
              </li>
              </React.Fragment>)}
              <li>
                {" "}
                Meditation in Pitve // A beautiful view of the Hvar canal, Jelsa
                and its surroundings, the entire island of Brač, Makarska coast
                and the mountain Biokovo
              </li>
              <li>Yoga classes by the sea</li>
              <li>
                {" "}
                Driving through an unique narrow,{" "}
                <a href="https://goo.gl/maps/RGM8G3YisXPuMD8L6">
                  dark tunnel
                </a>{" "}
                which connects the south and north sides of the island
              </li>
              <li>Grape harvest // September</li>
            </ul>
          </Col>
        </WrapCol>
      </WrapText>
      <WrapPlaninaDown>
        {" "}
        <Image src={Down} alt="slider image" layout="fill" objectFit="contain" />
      </WrapPlaninaDown>
    </PlaninaWrap>
    </WrapAll>
  );
};

export default Planina;
