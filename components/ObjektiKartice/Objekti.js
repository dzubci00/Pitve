import { HeroWrap, WrapImageDivider, WrapObjects, Container} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";

import Objekt from "./Objekt/Objekt";
import h1 from "../../images/house1.png";
import h1_1 from "../../images/house1_1.png";
import h2 from "../../images/house2.png";
import h2_1 from "../../images/house2_1.png";
import h3 from "../../images/house3.png";
import h3_1 from "../../images/house3_1.png";
import { imageList } from "./list.js";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useInView } from "react-intersection-observer";
import useWindowSize from "../useWindowSize.js";
import ImageContainer from "./imageContainer/imageContainer.js";

import { villaA } from "./villaA.js";
import { villaB } from "./villaB.js";
import { villaC } from "./villaC.js";


const Objekti = () => {


  const handleClick = (id) => {
  
  };


  const size=useWindowSize();
  let vilaPhotoA;
  let vilaPhotoB;
  let vilaPhotoC;
  if(size.width>700){
    vilaPhotoA=h1;
    vilaPhotoB=h2;
    vilaPhotoC=h3;
  }
  else if (size.width<=700&&size.width>500){
    vilaPhotoA=h1_1;
    vilaPhotoB=h2_1;
    vilaPhotoC=h3_1;
  }
  else{
    vilaPhotoA=h1;
    vilaPhotoB=h2;
    vilaPhotoC=h3;
  }

  const settings = {
    slidesToShow: 6,
    infinite:true,
    autoplay: true,
    autoplaySpeed: -100000,
    speed:5000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
        }
      },

    ]
      }
      
    
  return (
    <HeroWrap>
      <WrapObjects>
        <Objekt
          id={1}
          photo={vilaPhotoA}
          title="VILLA A"
          text="Old stone house converted into a luxury villa offering everything you need for a vacation in a place where nature and luxury meet. The house consists of 3 floors, with the living room, kitchen, bedrooms, spacious terraces and the swimming pool"
          data1="Capacity of 8 people (6+2 in 200 m2)
3 floors"
          data2="Living room and kitchen 100m2"
          data3="3 bedrooms"
          data4="3 toilets"
          data5="2 spacious terraces (in front of the house and roof terrace)"
          data6="Backyard"
          data7="Swimming pool 21m2"
          data8="Air conditioning"
          handleClick={handleClick}
          gallery={villaA}
        />
        <Objekt
          id={2}
          photo={vilaPhotoB}
          title="VILLA B"
          text="A detached old stone house converted into a luxury villa offering everything you need for a luxurious relaxing vacation for a maximum of 6 people. The house consists of 3 floors with a living room, kitchen, data5, a spacious terrace and a swimming pool "
          data1="Capacity of 6 people (4+2 in 120 m2)
3 floors"
          data2="Living room + kitchen"
          data3="2 bedrooms"
          data4="2 toilets"
          data5="Spacious terrace"
          data6="Backyard"
          data7="Swimming pool 21m2"
          data8="Air conditioning"
          handleClick={handleClick}
          gallery={villaB}
        />{" "}
        <Objekt
          id={3}
          photo={vilaPhotoC}
          title="VILLA C"
          text="A detached old stone house converted into a luxury villa offering everything you need for a luxurious relaxing vacation for a maximum of 6 people. The house consists of 3 floors with a living room, kitchen, bedrooms, a spacious terrace and a swimming pool"
          data1="Capacity of 4 people (2+2 in 50 m2)
2 floors"
          data2="Living room + kitchen 30m2"
          data3="1 Bedroom"
          data4="1 toilet"
          bedrooms="Spacious terrace"
          data6="Spacious terrace"
          data7="Air conditioning"
          handleClick={handleClick}
          gallery={villaC}
        />
      </WrapObjects>
      <WrapImageDivider>
        <Container>
          <Slider {...settings}>
            {imageList.map((image) => (
              <ImageContainer
                key={image.id}
                photo={image.photo}
              />
            ))}
          </Slider>
        </Container>
      </WrapImageDivider>
    </HeroWrap>
  );
};

export default Objekti;
