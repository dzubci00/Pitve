import { HeroWrap, WrapPhoto} from "./style.js";


import Slider from "react-slick";
import Image from "next/image";
import { images } from "./images.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
function NextArrow(props) {
  const {onClick } = props;
  return (
    <div className="wrapLoaderNext">
      <div className="arrow">
        <AiOutlineArrowRight size={25} />
      </div>
      <div className="loaderPrev" onClick={onClick}></div>
    </div>
  );
}

function PrevArrow(props) {
  const {onClick } = props;
  return (
    <div className="wrapLoaderPrev">
      <div className="arrow">
        <AiOutlineArrowLeft size={25} />
      </div>
      <div className="loaderNext" onClick={onClick}></div>
    </div>
  );
}

const PhotoSlider = () => {
  const settings = {
    className: "photoSlider",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyLoad: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2300,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
         dots:false,
        }
      },
    ]
  };

  return (
    <HeroWrap>
      <Slider {...settings}>
        {images.map((img, index) => (
          <WrapPhoto key={index}>
            <Image
              src={img.photo}
              alt="slider image"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </WrapPhoto>
        ))}
      </Slider>
    </HeroWrap>
  );
};

export default PhotoSlider;
